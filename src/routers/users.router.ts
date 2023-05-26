import { Router } from "express";
import { userControllers } from "../controllers/users.controller";

export const UsersRoutes: Router = Router();

//Exemplos:
UsersRoutes.get("/", userControllers);
