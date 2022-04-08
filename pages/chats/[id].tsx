import type { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";
import { Chats, Product, User } from "@prisma/client";
import useUser from "@libs/client/useUser";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import useMutation from "@libs/client/useMutation";
import { useForm } from "react-hook-form";

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
  user: User;
  //chats: Chats[];
}

interface ChatsResponse {
  ok:boolean;
  productMessage : ChatWithMessages; 
}
interface MessageForm{
  message: string;
}
const ChatDetail: NextPage = () => {
  const {user} = useUser();
  const router = useRouter();

  const {register, handleSubmit, reset} = useForm<MessageForm>();
  const {data, mutate} = useSWR<ChatsResponse>(router.query.id ? `/api/chats/${router.query.id}` : null,
  {
    refreshInterval: 1000,
  }
  );
  if(data?.productMessage)
  { console.log(data?.productMessage);
    //console.log(data?.productMessage?.chats[1]?.directMessage);
  }
  const [sendMessage, {loading, data: sendMessageData}] = useMutation(`/api/chats/${router.query.id}/message`);
    
  const onValid = (form:MessageForm) => {
    if(loading) return;
    console.log(form);
    let userId = user?.id;
    reset();
    mutate( 
      (prev) => 
      prev && {
        ...prev, 
        productMessage: {
          ...prev.productMessage, 
          chats: [
            ...prev.productMessage.chats,
            {
              id:Date.now(), 
              directMessage: form.message, 
              createdById: {
                userId,
              },  
            },
          ],
        },
      } as any, false
      );
      sendMessage(form);
    }
  return (
    <Layout canGoBack title="Steve">
      <div className="py-10 pb-16 px-4 space-y-4">
        {data?.productMessage?.chats.map((chatMessage) => ( 
          <Message key={chatMessage.id} message={chatMessage.directMessage} reversed= {chatMessage.createdById === user?.id } avatar= { chatMessage.createdById === user?.id ? data?.productMessage?.user?.avatar : null } />
         ))}
        <form  onSubmit={handleSubmit(onValid)} className="fixed py-2 bg-white  bottom-0 inset-x-0">
          <div className="flex relative max-w-md items-center  w-full mx-auto">
            <input
              type="text"
              {...register("message", {required:true})}
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

//data?.productMessage.chats && 