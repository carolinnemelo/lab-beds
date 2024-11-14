"use server";

import { revalidatePath } from "next/cache";

const bedsService = {
  async add(name: string) {
    // TODO: store it
    console.log({ name });
  },
};

export async function addBedAction(name: string) {
  await bedsService.add(name);
  revalidatePath("/");
}
 