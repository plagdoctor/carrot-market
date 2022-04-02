import {withIronSessionApiRoute} from "iron-session/next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { prisma } from "@prisma/client";

async function handler(
    req:NextApiRequest, res:NextApiResponse<ResponseType>
){  
    const {
        session: {user},
    } = req;
    if(req.method === "GET") {
        const chats = await client.chats.findMany({
            distinct: ['createdById', 'productId'],
            select: {
                id: true,
                createdBy : true,
                directMessage: true,
            },
            where: {
                createdForId: user?.id
    ,        },
            orderBy: {
                id: 'desc',
            }
        });
        console.log(chats);
        res.json({
            ok: true,
            chats
        });
    }
}

export default withApiSession(withHandler({
    methods: ["GET"], 
    handler,
}));


//include: {
//    createdBy: { select: {id:true, name:true, avatar:true} } },
//.map((d) =>{
//    const sentUser = await client.user.findFirst({where: {id: d.createdById }})
//});

// const chat = await client.chat.groupBy({
//     by: ['createdById','productId',],
    
//     where: {
//         createdForId: user?.id
// ,        },
    
// });