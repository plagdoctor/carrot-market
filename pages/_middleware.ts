import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";
export function middleware(req:NextRequest, ev: NextFetchEvent) {
    console.log("it works! global middleware.");
    console.log(req.ua);
    if(req.ua?.isBot) {
        return new Response("plz don't be a bot", {status:403});
    }
    if (!req.url.includes("/api")){
        if (!req.url.includes("enter") && !req.cookies.carrotsession){
           return NextResponse.redirect("/enter");
        }
    }
}