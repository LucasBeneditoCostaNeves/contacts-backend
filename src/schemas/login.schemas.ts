import * as z from "zod";

export const LoginPostSchema = z.object({
  email: z.string(),
  password: z.string(),
});
