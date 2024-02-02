"use server";

import dbConnect from "@/middleware/mongo";
import { Admin, type IAdmin } from "@/models/Admin";
import { revalidatePath } from "next/cache";

export interface IAdminModel extends IAdmin {
  _id: string;
  createdAt?: string;
  updatedAt?: string;
  __v: number;
}

export const getAllEntries = async (): Promise<IAdminModel[]> => {
  await dbConnect();
  const entries: IAdminModel[] = await Admin.find()
    .sort({ _id: -1 })
    .limit(100);
  return JSON.parse(JSON.stringify(entries));
};

export const deleteEntry = async (id: string): Promise<void> => {
  await dbConnect();
  await Admin.findByIdAndDelete(id);
  revalidatePath("/admin/user");
};
