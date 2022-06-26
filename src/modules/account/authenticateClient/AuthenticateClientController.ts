import {NextFunction, Request, Response} from "express";
import {AuthenticateClientUseCase} from "../../account/authenticateClient/AuthenticateClientUseCase";


export class AuthenticateClientController {
    async handle(request: Request, response: Response, next: NextFunction)  {
        const { username, password } = request.body;
        const authenticateClientUseCase = new AuthenticateClientUseCase();
        const result = await authenticateClientUseCase.execute({
            username,
            password
        });

        return response.json(result);


    }
}