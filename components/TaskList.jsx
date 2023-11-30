import List from "./List";

const TaskList = () => {
  return (
    <div className="flex flex-col h-full m-2 w-2/3  items-center gap-2 p-2">
      <h1 className=" font-extrabold">Lists</h1>
      <ul className="w-full gap-3">
        <List />
      </ul>
    </div>
  );
};

export default TaskList;
