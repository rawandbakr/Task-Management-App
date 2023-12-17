import { Button } from "../ui/button";
import Link from "next/link";

const EditBtn = ({ id }) => {
  return (
    <Button variant="default" size="">
      <Link href={`/${id}/Edit`}>Edit</Link>
    </Button>
  );
};

export default EditBtn;
