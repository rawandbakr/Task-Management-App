import TaskList from "@/components/TaskList";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-gray-200 gap-2 h-full w-full flex flex-row items-start justify-evenly">
      <TaskList />
    </div>
  );
}
