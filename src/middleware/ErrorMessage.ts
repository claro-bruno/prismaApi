import {Request, Response, NextFunction, RequestHandler, ErrorRequestHandler} from 'express';
import { AppError } from "./AppError";
// require("express-async-errors");

const errorHandler: ErrorRequestHandler = (

    err,
    _req,
    res ,
    _next,
) => {
    if (err.message) return res.status(err.statusCode).json({ message: err.message });
    return res.status(500).json({ message: 'Internal server error' });

};

export default errorHandler;