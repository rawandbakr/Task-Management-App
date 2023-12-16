"use client"
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import { Button } from "./ui/button";
import { TableCell, TableRow ,TableHead } from "@/components/ui/table";

const List = ({ task }) => {
  return (
    <TableRow key={task._id}>
      <TableCell className="font-medium">{task.description}</TableCell>
      <TableCell>{task.date}</TableCell>
      <TableCell>{task.status}</TableCell>
      <TableCell className="text-right">
        <span className="flex flex-row justify-end gap-2">
          <EditBtn id={task.id}/>
          <DeleteBtn id={task.id}/>
        </span>
      </TableCell>
    </TableRow>
  );
};

export default List;
