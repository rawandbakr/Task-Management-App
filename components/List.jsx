import { Button } from "./ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { useRouter } from "next/navigation";

const List = ({task}) => {
  const router = useRouter();

  const deleteTask = async () => {
    const res = await fetch(`/api/tasks/${task._id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <TableRow key={task._id}>
      <TableCell className="font-medium">{task.title}</TableCell>
      <TableCell>{task.date}</TableCell>
      <TableCell>{task.description}</TableCell>
      <TableCell className="text-right">
        <span className="flex flex-row justify-end gap-2">
          <Button variant="outline">Edit</Button>
          <Button variant="destructive" onClick={deleteTask}>Delete</Button>
        </span>
      </TableCell>
    </TableRow>
  );
};

export default List;
