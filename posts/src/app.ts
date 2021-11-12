import express, { Request, Response } from "express";
import { json } from "body-parser"
import { errorHandler } from "./middlewares/error-handler";

const app = express();

app.use(json())

app.use(errorHandler)

export default app;