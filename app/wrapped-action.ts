"use server";

import { actionClient } from "@/lib/safe-action";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

const inputSchema = zfd.formData({})

const regularAction = actionClient
  .inputSchema(inputSchema)
  .action(async () => {
    redirect("/?wrapped")
  });

export const wrappedAction = async (...args: Parameters<typeof regularAction>) => { await regularAction(...args) }