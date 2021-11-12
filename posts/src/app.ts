import express, { Request, Response } from "express";
import { json } from "body-parser"
import { errorHandler } from "./middlewares/error-handler";
import { newPostRouter } from "./routes/new";

const app = express();

app.use(json())

app.use(newPostRouter)

app.all('*', (req:Request, res:Response) => {
    return res.status(404).send([{message:'Not found'}])
})

app.use(errorHandler)

export default app;