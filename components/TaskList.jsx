import List from "./List";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TaskList = () => {
  return (
    <div className="flex flex-col h-full m-2 w-2/3  items-center gap-2 p-2">
      <Table>
        <TableCaption>A list of your recent tasks</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>details</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <List />
        </TableBody>
      </Table>
    </div>
  );
};

export default TaskList;
