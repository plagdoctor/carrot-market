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
        session: {user}
    }  = req;

    if(req.method === "GET"){
        const chats = await client.chats.findMany({
            where: {
                productId : +id.toString(),
                AND: [
                    {
                        
                        OR: [{
                            createdFor: {
                                id: user?.id,
                            },
                            createdBy: {
                                id: user?.id,
                            },
                        }]
                    }
                ]
            },
            select: {
                id: true,
                createdById: true,
                createdForId: true,
                createdFor: true,
                directMessage: true,
            }
            
        });
        const productMessage = await client.product.findUnique({
            where: {
                id : +id.toString(),
            },
            include: {
                chats: true,
                user: true,
            }
            
        });        
        res.json({
            ok:true,
            //chats,
            productMessage
        })
    }

}

export default withApiSession(withHandler({
    methods:[ "GET"], 
    handler,
}));
