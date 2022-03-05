
import {withIronSessionApiRoute} from "iron-session/next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { truncate } from "fs";

async function handler(
    req:NextApiRequest, res:NextApiResponse<ResponseType>
){
    const {query: {id}, session: {user}} = req;
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
    const terms = product?.name.split(" ").map(word => ({
        name: {
            contains: word,
        }
    }));
    console.log(terms);
    const relatedProducts = await client.product.findMany({
        where: {
            OR: terms,
            AND: {
                id: {
                    not: product?.id,
                },
            }
        },
    })
    console.log(relatedProducts);
    const isLiked = Boolean(await client.fav.findFirst({
        select: {
            id:true,
        },
        where: {
            productId: product?.id,
            userId: user?.id

        }
    })
    );
    res.json({
        ok:true,
        product,
        isLiked,
        relatedProducts
    });
}

export default withApiSession(withHandler({
    methods: ["GET"], 
    handler,
}));
