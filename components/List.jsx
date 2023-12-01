import { Button } from "./ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
const List = () => {
  return (
    <TableRow>
      <TableCell className="font-medium">make a website</TableCell>
      <TableCell>processing</TableCell>
      <TableCell>task mangment app crud</TableCell>
      <TableCell className="text-right">
        <span className="flex flex-row justify-end gap-2">
          <Button variant="outline">Edit</Button>
          <Button variant="destructive">Delete</Button>
        </span>
      </TableCell>
    </TableRow>
  );
};

export default List;
