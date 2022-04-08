import {withIronSessionApiRoute} from "iron-session/next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
    req:NextApiRequest, res:NextApiResponse<ResponseType>
){
    const {
        query: {id},
        body,
        session: {user},
    }  = req;

    if(req.method === "POST"){
        const toWhom = await client.product.findUnique({
            where: {
                id : +id.toString(),
            },
            select: {
                userId: true,
            }
        })

        const message = await client.chats.create({
            data: {
                directMessage: body.message,
                product:{
                    connect:{
                        id: +id.toString(),
                    }
                },
                createdBy:{
                    connect: {
                        id: user?.id,
                    },
                },
                createdFor:{
                    connect: {
                        id: toWhom?.userId,
                    },
                },                
            },
        });
        res.json({
            ok:true,
            message
        });
    }

}

export default withApiSession(withHandler({
    methods:[ "POST"], 
    handler,
}));
