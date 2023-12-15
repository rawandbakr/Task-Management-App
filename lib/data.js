"use server";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

export async function GetTasks() {
  noStore();
  try {
    const data = await sql`SELECT * FROM tasks`;
    data.rows.map((a)=>{
      a.date=a.date.toString()
      return a
    })
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
  }
}
export async function CreateTasks(formData) {
  noStore();
  const rawFormData = {
    title: formData.get("title"),
    description: formData.get("description"),
    date: formData.get("date"),
  };
  try {
    const data =
      await sql`INSERT INTO tasks (Description, Status,date) VALUES (${rawFormData.title}, ${rawFormData.description},
    ${rawFormData.date});`;
    revalidatePath('/')
  } catch (error) {
    console.log("error creating task", error);
  }
  console.log(rawFormData);
}
