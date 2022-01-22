import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5 bg-red-400">
      <details className="select-none open:text-white open:bg-indigo-400">
        <summary className="cursor-pointer">What is my fav. food.</summary>
        <span className="">피자</span>
        <ul className=" list-decimal marker:text-teal-500">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
        
      </details>
    </div>
  );
};

export default Home;
