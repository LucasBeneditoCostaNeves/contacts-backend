import { Request, Response } from "express";

export async function userControllers(req: Request, res: Response) {
  return res.status(201).send("Olá");
}
