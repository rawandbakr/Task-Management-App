import { DeleteTask } from "@/lib/actions";
import { Button } from "../ui/button";

const DeleteBtn = ({ id }) => {
  const DeleteTaskWithId = DeleteTask.bind(null, id);
  return (
    <form action={DeleteTaskWithId}>
      <Button variant="destructive">Delete</Button>
    </form>
  );
};

export default DeleteBtn;
