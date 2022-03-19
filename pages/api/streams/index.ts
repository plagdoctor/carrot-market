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
        body: {name, price, description},
    }  = req;

    console.log(name);
    console.log(price);
    if(req.method === "GET"){
        const streams = await client.stream.findMany();
        res.json({
            ok:true,
            streams,
        })
    }
    if(req.method === "POST"){
        const stream = await client.stream.create({
            data: {
                name, 
                price, description, user:{
                    connect: {
                        id: user?.id,
                    },
                },
            },
        });
        res.json({
            ok:true,
            stream
        })
    }

}

export default withApiSession(withHandler({
    methods:[ "GET", "POST"], 
    handler,
}));
