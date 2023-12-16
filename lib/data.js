import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function GetTasks() {
  noStore();
  try {
    const data = await sql`SELECT * FROM tasks`;
    data.rows.map((a) => {
      a.date = a.date.toString();
      return a;
    });
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
  }
}