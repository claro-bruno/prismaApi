import {NextFunction, Request, Response, Router} from "express";

import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import {AuthenticateClientController} from "./modules/account/authenticateClient/AuthenticateClientController";

const routes = Router();


const use = (fn: Function) => async (req: Request, res: Response, next: NextFunction) => {
    await fn(req, res, next).catch(next)
}

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post("/client/", createClientController.handle);
routes.post("/authenticate", authenticateClientController.handle);

export { routes };
