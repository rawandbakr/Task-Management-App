import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className=" flex flex-row justify-around items-center w-full h-20">
      <Link href="/">My Tasks</Link>
      <span className=" flex flex-row justify-center items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </span>
    </nav>
  );
};
