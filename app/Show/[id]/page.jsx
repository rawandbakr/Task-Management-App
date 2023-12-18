import Status from "@/components/Form/Status";
import { GetTasksId } from "@/lib/data";
export default async function Show({ params }) {
  const id = params.id;
  const task = await GetTasksId(id);
  return (
    <div className=" w-fit h-1/3 bg-white rounded-lg gap-4 text-xl font-normal flex flex-col justify-start items-start px-4 py-4">
      <h1 className=" m-2 bg-slate-50 p-4 rounded-md w-full">{task.title}</h1>
      <h1 className=" m-2 bg-slate-50 p-4 rounded-md w-full">{task.description}</h1>
      <Status status={task.status}/>
    </div>
  );
}
