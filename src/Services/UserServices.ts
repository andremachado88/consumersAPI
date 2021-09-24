import { Request, Response } from "express";
import { IUser } from "../Interfaces/UserInterface";

class UserServices {

    constructor()
    {
        console.log('Passou por aqui')
    }

    find2()
    {
        console.log('teste2');
    }

    find(req : Request, res: Response) {
       
      
       const user : IUser = {
            nome : 'nome',
            endereco : 'endereco'

        };
      
        console.log('teste:'+ user);
        return res.json(user).status(200);
    }

}

export default UserServices;