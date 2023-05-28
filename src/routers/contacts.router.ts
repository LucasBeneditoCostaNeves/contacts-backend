import { Router } from "express";
import { contactsPostController } from "../controllers/contacts.controller";

export const ContactsRouter: Router = Router();

ContactsRouter.post("/", contactsPostController);
