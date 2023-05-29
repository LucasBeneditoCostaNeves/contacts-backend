import { Repository } from "typeorm";
import { Contacts } from "../entities/contacts.entity";
import { AppDataSource } from "../data-source";

export async function verifyContactsExist(idToken: any, email: any) {
  //Capturando a Tabela
  const repository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  //Capturando todos os dados da tabela
  const arryDeDados: any = await repository.findOneBy({
    email: email,
    user: idToken,
  });

  if (arryDeDados) {
    return true;
  } else if (!arryDeDados) {
    return false;
  }
}
