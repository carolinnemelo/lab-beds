"use client";

import { Button, Input, Card, CardTitle } from "@/components";
import { addBedAction } from "@/feature/beds/actions";

export default function Home() {
  return (
    <>
      <Card className="text-center flex flex-col items-center m-auto mt-4 w-96">
        <CardTitle className="pt-6">Add a Bed</CardTitle>
        <Input className="my-4 w-80" type="text" name="bedName" />
        <Button className="mb-6" onClick={addBedAction}>Add bed</Button>
      </Card>
    </>
  );
}
