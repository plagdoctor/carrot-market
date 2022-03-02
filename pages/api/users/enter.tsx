
import mail from "@sendgrid/mail"
import twilio from "twilio";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

mail.setApiKey(process.env.SENDGRID_API_KEY!);

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
    req:NextApiRequest, res:NextApiResponse<ResponseType>
){
    const { phone, email} = req.body;
    const user = phone ? {phone} : email ? {email} : null;
    if(!user) return res.status(400).json({ ok: false});
    const payload = Math.floor(100000 + Math.random() * 900000) + "";

    //3단계 : payload 를 만들어 중복적인 구문 제거 
/*     const user = await client.user.upsert({
        where: {
            ...payload,
            // ...( phone ? { phone: +phone} : {}),
            // ...( email ? { email} : {}),
        },
        create: {
            name:"Anonymous",
            ...payload,
            // ...( phone ? { phone: +phone} : {}),
            // ...( email ? { email} : {}),
        },
        update: {},

    });     */

    //2단계 : upsert 로 인서트와 가져오기를 같이 함
/*     if(phone){
        user = await client.user.upsert({
            where: {
                phone: +phone,
            },
            create: {
                name:"Anonymous",
                phone: +phone,
            },
            update: {},

        });
    }else if(email){
        user = await client.user.upsert({
            where: {
                email,
            },
            create: {
                name:"Anonymous",
                email,
            },
            update: {},
    
        });
    } */


// 1단계 이메일이나 폰넘버를 각각 findUnique 해서 생성 또는 가져옴
/*     if(email){
        user = await client.user.findUnique({
            where: {
                email,
            },
        });
        if (user) console.log("found it.");
        if(!user){
            console.log("Did not find. will create.")
            user = await client.user.create({
                data: {
                    name:"Anonymous",
                    email,
                },
            });
        }
    }
    if(phone){
        user = await client.user.findUnique({
            where: {
                phone: +phone,
            },
        });
        if (user) console.log("found it.");
        if(!user){
            console.log("Did not find. will create.")
            user = await client.user.create({
                data: {
                    name:"Anonymous",
                    phone: +phone,
                },
            });
        }
    }    */ 
    
    const token = await client.token.create({
        data: {
            payload,
            user: {
                connectOrCreate: {
                    where: {
                        ...user,
                        // ...( phone ? { phone: +phone} : {}),
                        // ...( email ? { email} : {}),
                    },
                    create: {
                        name:"Anonymous",
                        ...user,
                        // ...( phone ? { phone: +phone} : {}),
                        // ...( email ? { email} : {}),
                    },
            
                },
            }
        }
    })
    if (phone) {
        // const message = await twilioClient.messages.create({
        //     messagingServiceSid: process.env.TWILIO_MS_SID,
        //     to: process.env.PHONE_NO!,
        //     body: `Your login token is ${payload}.`,
    
        // });
        // console.log(message);   
    } else if (email) {
/*         const email = await mail.send({
            from: "danroom@naver.com",
            to: "danroom85@gmail.com",
            subject: "Your Carrot Market Verification Email",
            text: `Your token is ${payload}.`,
            html: `<string>Your token is ${payload}.</strong>`,
        }) */
    }

    return res.json({
        ok:true,
    });
}

export default withHandler(
    ({
        methods: ["POST"], 
        handler,
        isPrivate: false,
    })
);
        
    
