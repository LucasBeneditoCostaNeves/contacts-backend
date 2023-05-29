import { Request, Response } from "express";
import {
  contactsDeleteService,
  contactsGetService,
  contactsPostService,
  contactsUpdateService,
} from "../services/contacts.services";
import { verifyContactsExist } from "../middlewares/verifyContactExist.middlewares";
import { contactsPostSchema } from "../schemas/contacts.schemas";

export async function contactsPostController(req: Request, res: Response) {
  const serializer = contactsPostSchema.parse(req.body);

  const verifyExistContact: any = await verifyContactsExist(
    req.user.id,
    req.body.email
  );

  if (verifyExistContact === true) {
    return res.status(409).json({ message: "This contact already exists" });
  }
  const returning = await contactsPostService(serializer, req.user.id);
  return res.status(201).send(returning);
}

export async function contactsGetController(req: Request, res: Response) {
  const returning = await contactsGetService(req.user.id);
  return res.status(200).send(returning);
}

export async function contactsDeleteController(req: Request, res: Response) {
  const idPassado = Number(req.params.id);

  await contactsDeleteService(req.user.id, idPassado);

  return res.status(204).send("");
}

export async function contactsPatchController(req: Request, res: Response) {
  const returning = await contactsUpdateService(
    req.body,
    req.user.id,
    req.params.id
  );
  return res.status(201).send(returning);
}
