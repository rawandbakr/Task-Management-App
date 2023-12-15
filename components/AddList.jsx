"use client";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { CreateTasks } from "@/lib/data";

const AddList = () => {
 
  return (
    <div className="flex border-2 flex-col  md:h-screen md:w-1/3 w-full  p-2 m-2">
      <h1 className=" font-extrabold">Add To List</h1>
      <form
      action={CreateTasks}
        className=" p-4 flex md:flex-col flex-row  md:justify-start md:items-start justify-center w-full gap-2"
        >
        <input
          type="text"
          id="title"
          name="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Title"
        />
        
        <textarea
          type="text"
          id="description"
          name="description"
          cols={3}
          className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Description"
        />
        
        <input
          type="date"
          id="date"
          name="date"
          className=" appearance-none border rounded shadow w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <Button variant="outline" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddList;
