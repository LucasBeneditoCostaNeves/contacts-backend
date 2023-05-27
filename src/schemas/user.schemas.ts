import * as z from "zod";

export const userPostSchema = z.object({
  name: z.string(),
  password: z.string(),
  email: z.string().email(),
  telephone: z.number(),
});

export const returnUserPostSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  telephone: z.number(),
  created_at: z.date(),
});
