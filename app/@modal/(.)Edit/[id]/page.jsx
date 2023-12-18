import React from "react";
import { GetTasksId } from "@/lib/data";
import EditList from "@/components/Form/EditList";
import Modal from "@/components/Modal/Modal";

export default async function Edit({ params }) {
  const id = params.id;
  const task = await GetTasksId(id);
  return (
    <Modal>
      <EditList data={task} />
    </Modal>
  );
}
