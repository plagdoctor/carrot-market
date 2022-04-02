import Link from "next/link";

interface ChatProps {
  id: number;
  avatar: string;
  name: string;
  message: string;
}

export default function Chat({
  id,
  avatar,
  name,
  message,
}: ChatProps) {
  return (
    <Link href={`/chats/${id}`}>
      <a className="flex px-4 cursor-pointer py-3 items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-slate-300" />
        <div>
          <p className="text-gray-700">{name}</p>
          <p className="text-sm  text-gray-500">
            {message}
          </p>
        </div>
      </a>      
    </Link>
  );
}
