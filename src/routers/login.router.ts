import { Router } from "express";
import { createLoginService } from "../services/login.services";
import { loginController } from "../controllers/login.controller";

export const LoginRouter: Router = Router();

//Exemplos:
LoginRouter.post("/", loginController);
