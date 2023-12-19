import Status from "@/components/Form/Status";
import Modal from "@/components/modal/Modal";
import { GetTasksId } from "@/lib/data";
export default async function Show({ params }) {
  const id = params.id;
  const task = await GetTasksId(id);
  return (
    <Modal>
        <h1 className=" m-2 p-4 rounded-md w-full">{task.title}</h1>
        <h1 className=" m-2 p-4 rounded-md w-full">
          {task.description}
        </h1>
        <Status status={task.status} />
    </Modal>
  );
}
