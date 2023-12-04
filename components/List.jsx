import { Button } from "./ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
const List = ({task}) => {
  return (
    <TableRow key={task._id}>
      <TableCell className="font-medium">{task.title}</TableCell>
      <TableCell>{task.date}</TableCell>
      <TableCell>{task.description}</TableCell>
      <TableCell className="text-right">
        <span className="flex flex-row justify-end gap-2">
          <Button variant="outline">Edit</Button>
          <Button variant="destructive">Delete</Button>
        </span>
      </TableCell>
    </TableRow>
  );
};

export default List;
