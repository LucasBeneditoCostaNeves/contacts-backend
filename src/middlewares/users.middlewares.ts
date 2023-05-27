import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";
import { NextFunction, Request, Response } from "express";

export async function verifyUserExist(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //Capturando a Tabela
  const repository: Repository<User> = AppDataSource.getRepository(User);

  //Capturando todos os dados da tabela
  const dataArray: Array<User> = await repository.findBy({
    email: req.body.email,
  });

  //Verificando se existe alguem com o mesmo email
  if (dataArray.length == 0) {
    return next();
  } else {
    //Caso exista retorna um erro de conflito
    return res.status(409).json({
      message: "Opa Camarada, esse email já existe!!!",
    });
  }
}
