import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import { UsersRoutes } from "./routers/users.router";
import { LoginRouter } from "./routers/login.router";
import { ContactsRouter } from "./routers/contacts.router";

const app: Application = express();
app.use(express.json());
app.use("/users", UsersRoutes);
app.use("/login", LoginRouter);
app.use("/contacts", ContactsRouter);
app.use(handleErrors);
export default app;
