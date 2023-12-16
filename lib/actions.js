"use server";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

export async function CreateTasks(formData) {
  const rawFormData = {
    title: formData.get("title"),
    description: formData.get("description"),
    date: formData.get("date"),
  };
  try {
    const data = await sql`INSERT INTO tasks 
      (Description, Status,date) 
      VALUES (${rawFormData.title}, ${rawFormData.description},
      ${rawFormData.date});`;
    revalidatePath("/");
  } catch (error) {
    console.log("error creating task", error);
  }
}

export async function DeleteTask(id) {
    try {
            await sql`DELETE FROM tasks WHERE id =${id}`;
            revalidatePath('/');
          }
     catch (error) {
      console.log("error delete task", error);
    }
  }
  