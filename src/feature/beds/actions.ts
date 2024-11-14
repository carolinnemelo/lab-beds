"use server";

import { revalidatePath } from "next/cache";
import { bedsServices } from "./instance";


export async function addBedAction(name: string) {
  await bedsServices.add(name);
  revalidatePath("/");
}
