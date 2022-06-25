import {NextFunction, Request, Response, Router} from "express";

import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

const routes = Router();


const use = (fn: Function) => async (req: Request, res: Response, next: NextFunction) => {
    await fn(req, res, next).catch(next)
}

const createClientController = new CreateClientController();
routes.post("/client/", use(createClientController.handle));

export { routes };
