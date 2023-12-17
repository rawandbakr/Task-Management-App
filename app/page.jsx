import AddList from "@/components/AddList";
import TaskList from "@/components/TaskList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <div className="gap-2 h-fit w-full md:flex hidden flex-row items-start justify-evenly">
      <Suspense fallback={"loading..."}>
        <TaskList />
      </Suspense>
      <AddList />
      </div>
      <div className="w-full h-screen flex md:hidden flex-col justify-start items-start">
      <AddList />
        <Suspense fallback={"loading..."}>
          <TaskList />
        </Suspense>
      </div>
    </div>
  );
}
