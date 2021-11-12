import express, { Request, Response } from "express";
import app from './app'

import dotenv from 'dotenv'
dotenv.config();

const start = async () => {

    const port = process.env.PORT
    
    app.listen(port, () => {
        console.log('Posts service started....');
    });

}

start();