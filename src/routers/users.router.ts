import { Router } from "express";
import {
  userDeleteController,
  userGetControllers,
  userPatchControllers,
  userPostControllers,
} from "../controllers/users.controller";
import { verifyUserExist } from "../middlewares/verifyUserExist.middlewares";
import { verifyToken } from "../middlewares/verifyToken.middlewares";

export const UsersRoutes: Router = Router();

//Exemplos:
UsersRoutes.post("/", verifyUserExist, userPostControllers);
UsersRoutes.get("/", verifyToken, userGetControllers);
UsersRoutes.patch("/", verifyToken, userPatchControllers);
UsersRoutes.delete("/", verifyToken, userDeleteController);
