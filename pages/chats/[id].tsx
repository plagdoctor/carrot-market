import type { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";
import { Chats, Product } from "@prisma/client";
import useUser from "@libs/client/useUser";
import useSWR from "swr";
import { useRouter } from "next/router";

interface chatMessage {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  directMessage: string;
  createdById: number;
  createdForId: number;
  productId: number | null;
}

interface ChatWithMessages extends Product {
  chats: chatMessage[];
  //chats: Chats[];
}

interface ChatsResponse {
  ok:boolean;
  productMessage : ChatWithMessages; 
}

const ChatDetail: NextPage = () => {
  const {user} = useUser();
  const router = useRouter();
  const {data} = useSWR<ChatsResponse>(router.query.id ? `/api/chats/${router.query.id}` : null)
  if(data?.productMessage)
  { 
    console.log("here");

    console.log(data?.productMessage);
    //console.log(data?.productMessage?.chats[1]?.directMessage);
  }
 
  return (
    <Layout canGoBack title="Steve">
      <div className="py-10 pb-16 px-4 space-y-4">
        {data?.productMessage.chats && data?.productMessage.chats.map((chatMessage) => ( 
          <Message key={chatMessage.id} message={chatMessage.directMessage} reversed= {chatMessage.createdById === user?.id } />
         ))}
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ￦20,000" reversed />
        <Message message="미쳤어" />
        <form className="fixed py-2 bg-white  bottom-0 inset-x-0">
          <div className="flex relative max-w-md items-center  w-full mx-auto">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">
                &rarr;
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;
