import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";
import { Repository } from "typeorm";
import { UserPatchSchema, returnUserPostSchema } from "../schemas/user.schemas";

export async function userPostService(data: any) {
  /*Capturando a Tabela para fazermos as modificações necessárias*/
  const repository = AppDataSource.getRepository(User);

  /*Adicionando dados do usuário*/
  const dataUser: any = repository.create(data!);

  /*Salvando a alteração*/
  await repository.save(dataUser);

  //Retornando data para o controller retornar os dados do usuário
  return returnUserPostSchema.parse(dataUser);
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

export const userUpdateService = async (dadoAtualizado: any, idUser: any) => {
  const repository: Repository<User> = AppDataSource.getRepository(User);

  const dataUser = await repository.findOneBy({
    id: idUser.id,
  });

  const serializer: any = UserPatchSchema.parse(dadoAtualizado);

  const atualização = repository.create({
    ...dataUser,
    ...serializer,
  });

  await repository.save(atualização);

  const serializerReturn = returnUserPostSchema.parse(atualização);
  return serializerReturn;
};

export async function userDeleteService(id: number) {
  //Capturando a Tabela
  const repository: Repository<User> = AppDataSource.getRepository(User);
  console.log(id);
  //Capturando o item com o Id que o usuário passou
  const user = await repository.findOne({
    where: {
      id: id,
    },
  });

  //Deletando o Item
  await repository.remove(user!);
}
