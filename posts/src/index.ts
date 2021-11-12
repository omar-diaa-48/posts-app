import express, { Request, Response } from "express";
import app from './app'

const start = async () => {
    app.listen(3000, () => {
        console.log('Posts service started....');
    });

}

start();