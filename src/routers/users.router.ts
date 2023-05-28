import { Router } from "express";
import {
  userDeleteController,
  userGetControllers,
  userPatchControllers,
  userPostControllers,
} from "../controllers/users.controller";
import { verifyUserExist } from "../middlewares/verifyUserExist.middlewares";
import { verifyIfAdmin } from "../middlewares/verifyToken.middlewares";

export const UsersRoutes: Router = Router();

//Exemplos:
UsersRoutes.post("/", verifyUserExist, userPostControllers);
UsersRoutes.get("/", userGetControllers);
UsersRoutes.patch("/", verifyIfAdmin, userPatchControllers);
UsersRoutes.delete("/", verifyIfAdmin, userDeleteController);
