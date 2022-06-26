import express, {NextFunction, Request, Response} from "express";
import { routes } from "./routes";
import { AppError} from "./middleware/AppError";
import "express-async-errors";
import errorHandler from "./middleware/ErrorMessage";
import {Rescue} from "express-rescue";

const app = express();
app.use(express.json());



const use = (fn: Function) => async (req: Request, res: Response, next: NextFunction) => {
    await fn(req, res, next).catch(next)
}


app.use(use(routes));
app.use(errorHandler);
// app.use((err: Error, request: Request, response: Response,  next: NextFunction) => {
//     if (!err.statusCode) {
//         return response.status(400).json({
//             message: err.message,
//         })
//     }
//     return response.status(500).json({
//         status: "error",
//         message: "Internal Server Error",
//     });
// });
app.listen(3000, () => console.log("Server is Running"));