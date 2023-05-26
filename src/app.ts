import express, { Application } from "express";
import { handleErrors } from "./errors";
import { UsersRoutes } from "./routers/users.router";

const app: Application = express();
app.use(express.json());
app.use("/test", UsersRoutes);
app.use(handleErrors);
export default app;
