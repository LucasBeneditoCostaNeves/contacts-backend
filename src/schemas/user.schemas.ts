import { hashSync } from "bcryptjs";
import * as z from "zod";

export const userPostSchema = z.object({
  name: z.string(),
  password: z.string().transform((pass) => {
    return hashSync(pass, 10);
  }),
  email: z.string().email(),
  telephone: z.number(),
});

export const UserPatchSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  email: z.string().email().optional(),
  telephone: z.number().optional(),
});

export const returnUserPostSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  telephone: z.number(),
  created_at: z.date(),
});
