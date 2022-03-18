import {withIronSessionApiRoute} from "iron-session/next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
    req:NextApiRequest, res:NextApiResponse<ResponseType>
){
    console.log(req.session);
    const {token} = req.body;
    const foundToken = await client.token.findUnique({
        where: {
            payload: token,
        },
        // include: { user: true},
    });

    console.log(token);
    if (!foundToken) return res.status(404).end();
    console.log(foundToken);
    req.session.user = {
        id : foundToken.userId,
    };
    await req.session.save();
    await client.token.deleteMany({
        where:{
            userId: foundToken.userId,
        },
    });

    res.json({ ok:true,});
}

export default withApiSession(withHandler({
    methods: ["POST"], 
    handler,
    isPrivate: false
}));
