import { GetTasks } from "@/lib/data";
import List from "./List";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function TaskList() {
  const data = await GetTasks();
  return (
    <div className="flex flex-col h-full m-2 md:w-2/3  items-center gap-2 p-2">
      <Table>
        <TableCaption>A list of your recent tasks</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>status</TableHead>
            <TableHead>Details</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((task,index)=>
          <List 
          key={index} 
          task={task}
          />)} 
        </TableBody>
      </Table>
    </div>
  );
}
