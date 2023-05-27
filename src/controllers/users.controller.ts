import { Request, Response } from "express";
import { userGetService, userPostService } from "../services/users.services";
import { userPostSchema } from "../schemas/user.schemas";

export async function userPostControllers(req: Request, res: Response) {
  //Chamando nossa função service responsável pela lógica
  const serializer = userPostSchema.parse(req.body);
  const retornoDaFuncao = await userPostService(serializer);
  //Retornando o objeto retornando pelo service
  return res.status(201).send(retornoDaFuncao);
}

export async function userGetControllers(req: Request, res: Response) {
  //Chamando nossa função service responsável pela lógica
  const retornoDaFuncao = await userGetService();
  //Retornando o objeto retornando pelo service
  return res.status(201).send(retornoDaFuncao);
}
