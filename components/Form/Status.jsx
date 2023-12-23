const Status = ({ status }) => {
  const color = () => {
    switch (status) {
      case `Planned`:
        return `bg-blue-300`;
      case `Review`:
        return `bg-orange-300`;
      case `Complete`:
        return `bg-green-300`;
      case `Inprogress`:
        return `bg-yellow-300`;
      default:
        return "";
    }
  };
  return (
    <span className={`p-2 m-2 rounded-lg ${color(status)}`}>{status}</span>
  );
};

export default Status;
