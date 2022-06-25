import {prisma} from "../../../../database/prismaClient";
import { hash } from "bcrypt";
import {AppError} from "../../../../middleware/AppError";

interface ICreateClient {
    username: string;
    password: string;
}
export class CreateClientUseCase {
    async execute({ username, password } : ICreateClient): Promise<any>{
        //validar se o client existe
        const clientExist = await prisma.clients.findUnique({
           where: {
               username: username.toLowerCase()
           }
        });

        if(clientExist) {
            throw new AppError('User already exists', 422)
        }
        //criptografar a senha
        const hashPassword = await hash(password, 10);
        //salvar o client
        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            }
        });
        return client;
    }
}