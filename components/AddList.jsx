const AddList = () => {
  return (
    <div className="flex border-2 flex-col h-screen w-1/3  p-2 m-2">
      <h1 className=" font-extrabold">Add To List</h1>
      <form className=" p-4 flex flex-col justify-start items-start w-full gap-2">
        <label>Title</label>
        <input
          type="text"
          id="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Title"
        />
        <label>Description</label>
        <input
          type="text"
          id="Description"
          className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Description"
        />
        <label>Due date</label>
        <input
          type="date"
          id="date"
          className=" appearance-none border rounded shadow w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddList;
