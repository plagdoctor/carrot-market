import {withIronSessionApiRoute} from "iron-session/next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { truncate } from "fs";

async function handler(
    req:NextApiRequest, res:NextApiResponse<ResponseType>
){
    const {id} = req.query;
    const product = await client.product.findUnique({
        where: {
            id: +id.toString(),
        },
        include: {
            user:{
                select: {
                    id: true,
                    name: true,
                    avatar: true,
                }
            }
        }
    });
    console.log(product?.user);
    res.json({
        ok:true,
        product
    });
}

export default withApiSession(withHandler({
    methods: ["GET"], 
    handler,
}));
