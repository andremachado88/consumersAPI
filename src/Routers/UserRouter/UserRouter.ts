import { Router } from "express";
import UserController from "../../Controllers/UserController/UserController";

const routes = Router();

//USERS
routes.get("/users", UserController.find);

// routes.get("/users/:id", UserController.findById);
// routes.post("users", UserController.create);
// routes.put("users", UserController.update);
// routes.delete("users", UserController.findById);

export default routes;