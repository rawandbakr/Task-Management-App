"use client";

import List from "./List";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TaskList() {
  const { data, error } = useSWR("/api/tasks", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  const taskss = data.tasks;
  return (
    <div className="flex flex-col h-full m-2 w-2/3  items-center gap-2 p-2">
      <Table>
        <TableCaption>A list of your recent tasks</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Details</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {taskss.map((task)=>
          <List task={task} key={task._id}/>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
