import { Router } from "express";
import {
  userGetControllers,
  userPostControllers,
} from "../controllers/users.controller";
import { verifyUserExist } from "../middlewares/users.middlewares";

export const UsersRoutes: Router = Router();

//Exemplos:
UsersRoutes.post("/", verifyUserExist, userPostControllers);
UsersRoutes.get("/", userGetControllers);
