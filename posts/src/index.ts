import express, { Request, Response } from "express";
import app from './app'
import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config();

const start = async () => {

    if(!process.env.MONGO_URI){
        throw new Error('MONGO_URI must be defined')
    }

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Mongo db is connected');
    } catch (error) {
        console.error(error);
    }

    const port = process.env.PORT || 3000

    app.listen(port, () => {
        console.log('Posts service started....');
    });

}

start();