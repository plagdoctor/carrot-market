import type { NextPage } from "next";

const Chats: NextPage = () => { 
    return (
    <div className="px-4 divide-y-[1px] ">
        {[1,2,3,4,5,6].map((_,i) => (
        <div key={i} className=" flex cursor-pointer py-3   items-center space-x3">
          <div className="w-12 h-12 rounded-full bg-slate-300 mr-3" />
          <div>
            <p className=" text-gray-700">Steve Jebs</p>
            <p className="text-sm  text-gray-500">See you tomorrow in the corner!</p>
          </div>
        </div>     
        ))
        }
    </div>
    );
};

export default Chats;