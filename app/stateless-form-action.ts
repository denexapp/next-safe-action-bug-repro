"use server";

import { actionClient } from "@/lib/safe-action";
import { z } from "zod/v4";
import { zfd } from "zod-form-data";

const inputSchema = zfd.formData({
  name: zfd.text(z.string().min(1).max(20)),
});

export const statelessFormAction = actionClient
  .inputSchema(inputSchema)
  .action(async ({ parsedInput }) => {
    await new Promise((res) => setTimeout(res, 1000));

    return {
      newName: parsedInput.name,
    };
  });