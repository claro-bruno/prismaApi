import {Request, Response, NextFunction, RequestHandler, ErrorRequestHandler} from 'express';
import { AppError } from "./AppError";

const errorHandler: ErrorRequestHandler = (

    err,
    _req,
    res ,
    _next,
) => {

    if (!err.statusCode) return res.status(500).json({ message: 'Internal server error' });
    return res.status(err.statusCode).json({ message: err.message });

};

export default errorHandler;