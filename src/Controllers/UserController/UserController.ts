import { Request, Response } from "express";
import UserServices from "../../Services/UserServices";
class UserController {
  async find(req: Request, res: Response) {

  const service = new UserServices();
    // const serviceAuthenticate = new AuthtenticateService(null);
    // const login: string = req.params.login;
    // const password: string = req.params.password;
    // const { id } = serviceAuthenticate.authenticate(login, password);
    // const token: string = serviceAuthenticate.createToken(login, password, id);
    console.log('Passou aqui2');

    return res.json(service.find(req,res));
  }
}

export default new UserController();