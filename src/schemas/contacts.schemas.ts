import { z } from "zod";

export const contactsPostSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  telephone: z.number(),
});

export const contactsPatchSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  telephone: z.number().optional(),
});
