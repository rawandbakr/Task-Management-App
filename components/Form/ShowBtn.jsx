import { Button } from "../ui/button";
import Link from "next/link";

const ShowBtn = ({ id }) => {
  return (
    <Button variant="outline">
      <Link href={`/Show/${id}`} className=" items-center justify-center">
        ...
      </Link>
    </Button>
  );
};

export default ShowBtn;
