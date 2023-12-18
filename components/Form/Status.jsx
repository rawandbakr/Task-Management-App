const Status = ({ status }) => {
  const color = () => {
    switch (status) {
      case `Planned`:
        return `bg-blue-200`;
      case `Review`:
        return `bg-orange-200`;
      case `Complete`:
        return `bg-green-200`;
      case `Inprogress`:
        return `bg-yellow-200`;
      default:
        return "";
    }
  };
  return (
    <span className={`p-2 m-2 rounded-lg ${color(status)}`}>{status}</span>
  );
};

export default Status;
