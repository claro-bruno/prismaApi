import express from "express";
import { routes } from "./routes";
import errorHandler from "./middleware/ErrorMessage"

const app = express();

app.use(express.json());

app.use(routes);
app.use(errorHandler)
app.listen(3000, () => console.log("Server is Running"));