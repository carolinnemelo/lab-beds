"use client";

import { Button, Input, Card } from "@/components";
import { addBedAction } from "@/actions";

export default function Home() {
  return (
    <>
      <h1>Add a Bed</h1>
      <Card>
        <Input type="text" />
        <Button onClick={() => addBedAction("Queen size")}>Add bed</Button>
      </Card>
    </>
  );
}
