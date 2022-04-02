import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import useSWR from "swr";
import { Chats, User } from "@prisma/client";
import Chat from "@components/chat";

interface ChatWithUser extends Chats {
  createdBy: User;
}
interface ChatsResponse {
  ok:boolean;
  chats: ChatWithUser[];
}

const Chats: NextPage = () => {
  const {user, isLoading} = useUser();
  const {data} = useSWR<ChatsResponse>("/api/chats");
  console.log(data);
  return (
    <Layout hasTabBar title="채팅">
      <div className="divide-y-[1px] ">
        {data?.chats?.map((chat) => (
            <Chat
              id={chat.id}
              name={chat.createdBy.name}
              avatar= {chat.createdBy.avatar? chat.createdBy.avatar : 'none'}
              message={chat.directMessage}
            />
          ))}       
      </div>
    </Layout>
  );
};

export default Chats;

// {user?.avatar? <img src={`https://imagedelivery.net/anLhvYjm508UkDZ_aeVt9g/${user.avatar}/avatar`} className="w-16 h-16 rounded-full bg-slate-500" /> 
// : <div className="w-12 h-12 rounded-full bg-slate-500" />
// }