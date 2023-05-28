import { Request, Response } from "express";

export async function contactsPostController(req: Request, res: Response) {
  return res.status(200).send("ook");
}
