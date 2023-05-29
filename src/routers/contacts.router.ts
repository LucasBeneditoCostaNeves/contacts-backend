import { Router } from "express";
import {
  contactsGetController,
  contactsPostController,
  contactsDeleteController,
  contactsPatchController,
} from "../controllers/contacts.controller";
import { verifyToken } from "../middlewares/verifyToken.middlewares";

export const ContactsRouter: Router = Router();

ContactsRouter.post("/", verifyToken, contactsPostController);
ContactsRouter.get("/", verifyToken, contactsGetController);
ContactsRouter.delete("/:id", verifyToken, contactsDeleteController);
ContactsRouter.patch("/:id", verifyToken, contactsPatchController);
