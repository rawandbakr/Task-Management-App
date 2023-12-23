import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export async function Nav() {
  const session = await getServerSession(options);
  const user = session ? session.user : [];

  return (
    <nav className=" flex flex-row justify-around items-center w-full h-20">
      <Link href="/">My Tasks</Link>
      <span className=" flex flex-row justify-center items-center gap-4">
        {session ? (
          <>
            <h1>
              Welcome Back{" "}
              <span className=" font-semibold text-sky-500">{user.name} </span>{" "}
            </h1>
            <Avatar>
              <AvatarImage src={user.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          </>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </span>
    </nav>
  );
}
