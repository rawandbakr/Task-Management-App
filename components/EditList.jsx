"use client";
import { Button } from "@/components/ui/button";
import { UpdateTask } from "@/lib/actions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const EditList = ({ data }) => {
  const updateTaskwithId = UpdateTask.bind(null, data.id);
  return (
    <div className="flex flex-col  md:h-screen md:w-1/3 w-full  p-2 m-2">
      <h1 className=" font-extrabold px-4">Add To List</h1>
      <form
        action={updateTaskwithId}
        className=" p-4 flex md:flex-col flex-row  md:justify-start md:items-start justify-start items-start w-full gap-2">
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={data.title}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Title"
        />
        <textarea
          type="text"
          id="description"
          name="description"
          cols={1}
          rows={1}
          defaultValue={data.description}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Description"
        />

<Select id="status" name="status">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="Planned">Planned</SelectItem>
              <SelectItem value="Review">Review</SelectItem>
              <SelectItem value="In progress">In progress</SelectItem>
              <SelectItem value="Complete">Complete</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="default" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default EditList;
