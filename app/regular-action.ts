"use server";

import { actionClient } from "@/lib/safe-action";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

const inputSchema = zfd.formData({})

export const regularAction = actionClient
  .inputSchema(inputSchema)
  .action(async () => {
    redirect("/?regular")
  });
