"use client";
import DeleteBtn from "../Form/DeleteBtn";
import EditBtn from "../Form/EditBtn";
import ShowBtn from "../Form/ShowBtn";
import Status from "../Form/Status";
import { TableCell, TableRow, TableHead } from "@/components/ui/table";

const List = ({ task }) => {
  return (
    <TableRow key={task._id}>
      <TableCell className="font-medium">{task.title}</TableCell>
      <TableCell>
        <Status status={task.status} />
      </TableCell>
      <TableCell className="text-right">
        <span className="flex flex-row justify-end gap-2">
          <EditBtn id={task.id} />
          <DeleteBtn id={task.id} />
          <ShowBtn id={task.id}/>
        </span>
      </TableCell>
    </TableRow>
  );
};

export default List;
