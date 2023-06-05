import { FindOptionsWhere, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contacts } from "../entities/contacts.entity";
import {
  contactsPatchSchema,
  contactsPostSchema,
} from "../schemas/contacts.schemas";
import { AppError } from "../errors";

export async function contactsPostService(data: any, id: Number) {
  /*Capturando a Tabela para fazermos as modificações necessárias*/
  const genericoRepository = AppDataSource.getRepository(Contacts);

  data = contactsPostSchema.parse(data);
  /*Adicionando dados do usuário*/
  const newData = {
    ...data,
    user: id,
  };
  const adicionandoAoBancoDeDados: any = genericoRepository.create(newData!);
  /*Salvando a alteração*/
  await genericoRepository.save(adicionandoAoBancoDeDados);
  //Retornando data para o controller retornar os dados do usuário
  return adicionandoAoBancoDeDados;
}

export async function contactsGetService(id: any) {
  //Capturando a Tabela
  const repository: any = AppDataSource.getRepository(Contacts);

  //Capturando todos os dados da tabela
  const arryDeDados: any = await repository.find({
    where: {
      user: {
        id: id,
      },
    },
  });
  //Retornando os dados da tabela
  return arryDeDados;
}

export async function contactsDeleteService(userId: any, id: any) {
  const repository = AppDataSource.getRepository(Contacts);

  const contact: any = await repository.findOne({
    where: {
      user: {
        id: userId,
      },
      id: id,
    },
  });
  if (!contact) {
    throw new AppError("Contact no already exists", 404);
  }
  repository.remove(contact!);
}

export const contactsUpdateService = async (
  dadoAtualizado: any,
  idToken: any,
  idUser: any
) => {
  const repository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  const dataUser = await repository.findOneBy({
    user: idToken,
    id: idUser,
  });
  if (!dataUser) {
    throw new AppError("Contact no already exists", 404);
  }

  const serializer: any = contactsPatchSchema.parse(dadoAtualizado);

  const atualização = repository.create({
    ...dataUser,
    ...serializer,
  });

  await repository.save(atualização);

  return atualização;
};
