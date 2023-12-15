import AddList from "@/components/AddList";
import TaskList from "@/components/TaskList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <div className="bg-gray-200 gap-2 h-full w-full md:flex hidden flex-row items-start justify-evenly">
      <Suspense fallback={<div className=" w-full h-40 bg-orange-300" />}>
        <TaskList />
      </Suspense>
      <AddList />
      </div>
      <div className="bg-gray-200 w-full flex md:hidden flex-col justify-start items-start">
      <AddList />
        <Suspense fallback={<div className=" w-full h-40 bg-orange-300" />}>
          <TaskList />
        </Suspense>
      </div>
    </div>
  );
}
