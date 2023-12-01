import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Nav = () => {
  return (
    <nav className=" flex flex-row justify-around items-center w-full h-20">
      <h1>My Tasks</h1>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </nav>
  );
};
