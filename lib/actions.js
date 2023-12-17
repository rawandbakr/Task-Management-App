"use server";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function CreateTasks(formData) {
  const rawFormData = {
    title: formData.get("title"),
    description: formData.get("description"),
    status: formData.get("status"),
  };
  try {
    await sql`INSERT INTO tasks 
      (title, description,status) 
      VALUES (${rawFormData.title}, ${rawFormData.description},
      ${rawFormData.status});`;
  } catch (error) {
    console.log("error creating task", error);
  }
  revalidatePath("/");
}

export async function DeleteTask(id) {
  try {
    await sql`DELETE FROM tasks WHERE id =${id}`;
    revalidatePath("/");
  } catch (error) {
    console.log("error delete task", error);
  }
}
export async function UpdateTask(id, formData) {
  const rawFormData = {
    title: formData.get("title"),
    description: formData.get("description"),
    status: formData.get("status"),
  };
  try {
    await sql`
    UPDATE tasks
    SET title = ${rawFormData.title}, description = ${rawFormData.description}, status = ${rawFormData.status}
    WHERE id = ${id}
  `;
  } catch (error) {
    console.log("error updating task", error);
  }
  revalidatePath("/");
  redirect("/", "replace");
}
