import express, { Request, Response } from "express";
import { json } from "body-parser"

const app = express();

app.use(json())

export default app;