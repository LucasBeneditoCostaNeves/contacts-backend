import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";
import { Repository } from "typeorm";
import { returnUserPostSchema } from "../schemas/user.schemas";

export async function userPostService(data: any) {
  /*Capturando a Tabela para fazermos as modificações necessárias*/
  const genericoRepository = AppDataSource.getRepository(User);

  /*Adicionando dados do usuário*/
  const adicionandoAoBancoDeDados: any = genericoRepository.create(data!);

  /*Salvando a alteração*/
  await genericoRepository.save(adicionandoAoBancoDeDados);

  //Retornando data para o controller retornar os dados do usuário
  return returnUserPostSchema.parse(adicionandoAoBancoDeDados);
}

export async function userGetService() {
  //Capturando a Tabela
  const repository: Repository<User> = AppDataSource.getRepository(User);

  //Capturando todos os dados da tabela
  const dataArray: Array<User> = await repository.find();

  const newDataArray = [];

  //Serializando os dados para retorno
  for (let i = 0; i < dataArray.length; i++) {
    //Adicionando os dados serializados para o array que vai armazena-lo
    newDataArray.push(returnUserPostSchema.parse(dataArray[i]));
  }
  return newDataArray;
}
