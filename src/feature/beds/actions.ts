"use server";

import { revalidatePath } from "next/cache";
import { bedsServices } from "./instance";


export async function addBedAction(bedFormData: FormData) {
  console.log(bedFormData)
  const name = bedFormData.get("bedName");
  console.log(name);
  // await bedsServices.add(name);
  revalidatePath("/");
}
