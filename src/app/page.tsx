import { Button, Input } from "@/components";
import { onClick } from "@/actions";

export default function Home() {
  return (
    <>
      <h1>Add a Bed</h1>
      <Input type="text" />
      <Button onClick={onClick}>Add bed</Button>
    </>
  );
}
