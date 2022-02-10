
import type { NextPage } from "next";
import Layout from "../../components/layout";

const ChatDetail: NextPage = () => {
  return (
<Layout canGoBack>
<div className="px-4 py-10 space-y-3">
      <div className="flex items-start space-x-2 ">
        <div className="w-8 h-8 rounded-full bg-slate-400 " />
        <p className="w-1/2 text-sm text-gray-700 p-2 rounded-md border">Hi how much are you selling them for?</p>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse  ">
        <div className="w-8 h-8 rounded-full bg-slate-400 "  />
        <p className="w-1/2 text-sm text-gray-700 p-2 rounded-md border">I want ￦20,000</p>
      </div>
      <div className="flex items-start space-x-2  ">
        <div  className="w-8 h-8 rounded-full bg-slate-400 "/>
        <p className="w-1/2 text-sm text-gray-700 p-2 rounded-md border" >미쳤어</p>
      </div>
      <div className="flex items-start space-x-2 ">
        <div className="w-8 h-8 rounded-full bg-slate-400 " />
        <p className="w-1/2 text-sm text-gray-700 p-2 rounded-md border">Hi how much are you selling them for?</p>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse  ">
        <div className="w-8 h-8 rounded-full bg-slate-400 "  />
        <p className="w-1/2 text-sm text-gray-700 p-2 rounded-md border">I want ￦20,000</p>
      </div>
      <div className="flex items-start space-x-2  ">
        <div  className="w-8 h-8 rounded-full bg-slate-400 "/>
        <p className="w-1/2 text-sm text-gray-700 p-2 rounded-md border" >미쳤어</p>
      </div>
      <div className="flex items-start space-x-2 ">
        <div className="w-8 h-8 rounded-full bg-slate-400 " />
        <p className="w-1/2 text-sm text-gray-700 p-2 rounded-md border">Hi how much are you selling them for?</p>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse  ">
        <div className="w-8 h-8 rounded-full bg-slate-400 "  />
        <p className="w-1/2 text-sm text-gray-700 p-2 rounded-md border">I want ￦20,000</p>
      </div>
      <div className="flex items-start space-x-2  ">
        <div  className="w-8 h-8 rounded-full bg-slate-400 "/>
        <p className="w-1/2 text-sm text-gray-700 p-2 rounded-md border" >미쳤어</p>
      </div>            
      <div className=" fixed w-full mx-auto max-w-md bottom-4 inset-x-0 ">
        <div className=" relative flex items-center">
          <input type="text" className="w-full pr-12 rounded-full shadow-sm border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500" />
          <div className=" absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <button className=" flex items-center rounded-full px-3 text-white bg-orange-500 text-sm hover:bg-orange-600 focus:ring-offset-2 focus:ring-orange-500 focus:ring-2">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
</Layout>

  );
};

export default ChatDetail;