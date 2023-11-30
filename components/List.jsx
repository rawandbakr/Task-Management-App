const List = () => {
  return (
    <li className="bg-white p-2 m-2 rounded-md flex flex-row justify-between items-center gap-2">
      <span className=" flex flex-col">
        <h2 className=" font-bold">Title</h2>
        <p className=" font-extralight"> deleniti, ullam autem possimus corrupti distinctio vitae fuga voluptates ratione repellat veniam tempora. Eum, aut.</p>
      </span>
      <span className="flex flex-row gap-2">
        <button>Edit</button>
        <button>Delete</button>
      </span>
    </li>
  );
};

export default List;
