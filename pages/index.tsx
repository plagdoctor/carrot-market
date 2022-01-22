import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 p-5 focus-within:bg-blue-100">
      <input type="text"
      required
      placeholder="UserName"
      className=" border p-1 peer border-gray-400 rounded-full placeholder:text-red-500"
      />
      <span className=" hidden peer-invalid:block peer-invalid:text-red-500">This input is invalid</span>
      <span className=" hidden peer-valid:block peer-invalid:text-teal-500">awesome Username</span>
      <span className=" hidden peer-hover:block peer-invalid: text-orange-400">hello</span>
      
      <input type="submit" value="Login" className="bg-white"/>
    </form>
  );
};

export default Home;
