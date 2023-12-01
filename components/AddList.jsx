"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";

const AddList = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    toast({
      title: data.Title,
      description: data.Date,
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  };

  return (
    <div className="flex border-2 flex-col h-screen w-1/3  p-2 m-2">
      <h1 className=" font-extrabold">Add To List</h1>
      <form
        className=" p-4 flex flex-col justify-start items-start w-full gap-2"
        onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="Title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Title"
          {...register("Title", { required: true, maxLength: 20 })}
        />
        {errors.Title && (
          <p className=" text-red-500 font-mono">Title is required.</p>
        )}
        <input
          type="text"
          id="Description"
          className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Description"
          {...register("Description", { required: true, maxLength: 200 })}
        />
        {errors.Description && (
          <p className=" text-red-500 font-mono">Description is required.</p>
        )}
        <input
          type="date"
          id="Date"
          className=" appearance-none border rounded shadow w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("Date", { required: true })}
        />

        {errors.Date && (
          <p className=" text-red-500 font-mono">Date is required.</p>
        )}
        <Button variant="outline" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddList;
