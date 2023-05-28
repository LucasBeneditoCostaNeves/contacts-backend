import { Request, Response } from "express";
import { LoginPostSchema } from "../schemas/login.schemas";
import { createLoginService } from "../services/login.services";

export async function loginController(req: Request, res: Response) {
  const validate = LoginPostSchema.parse(req.body);
  const returning = await createLoginService(validate);
  return res.json({
    token: returning,
  });
}
