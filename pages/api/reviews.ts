import {withIronSessionApiRoute} from "iron-session/next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
    req:NextApiRequest, res:NextApiResponse<ResponseType>
){
    const {
        session: {user},
    }  = req;
    const reviews = await client.review.findMany({
        where: {
            createdForId: user?.id
,        },
        include: {
            createdBy: { select: {id:true, name:true, avatar:true} } },
    });
    console.log(user);
    res.json({
        ok:true,
        reviews
    })
}

export default withApiSession(withHandler({
    methods:[ "GET"], 
    handler,
}));
