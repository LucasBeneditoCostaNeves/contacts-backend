import { Request, Response } from "express";
import {
  userUpdateService,
  userDeleteService,
  userGetService,
  userPostService,
} from "../services/users.services";
import { userPostSchema } from "../schemas/user.schemas";

export async function userPostControllers(req: Request, res: Response) {
  //Chamando nossa função service responsável pela lógica
  const serializer = userPostSchema.parse(req.body);
  const returning = await userPostService(serializer);
  //Retornando o objeto retornando pelo service
  return res.status(201).send(returning);
}

export async function userGetControllers(req: Request, res: Response) {
  //Chamando nossa função service responsável pela lógica
  const returning = await userGetService();
  //Retornando o objeto retornando pelo service
  return res.status(201).send(returning);
}

export async function userPatchControllers(req: Request, res: Response) {
  const returning = await userUpdateService(req.body, req.user);
  return res.status(200).json(returning);
}

export async function userDeleteController(req: Request, res: Response) {
  const idPassado = Number(req.user.id);

  await userDeleteService(idPassado);

  return res.status(204).send("");
}
