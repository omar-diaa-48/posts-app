import express, { Request, Response } from "express";
import { body } from "express-validator";
import Post from "../models/post";

const router = express.Router();

router.post(
    '/api/posts', 
    [
        body('title').not().isEmpty().withMessage('Title must be provided').isString().withMessage('Title must be text'),
        body('content').not().isEmpty().withMessage('Content must be provided').isString().withMessage('Content must be text'),
        body('owner').not().isEmpty().withMessage('Owner of the post must be provided').isString().withMessage('Owner must be text'),
    ],
    async (req:Request, res:Response) => {
    
    const {title, content, owner} = req.body;        

    const post = Post.build({
        title,
        content,
        owner
    });

    await post.save();

    res.send(201).send(post)
})

export {router as newPostRouter};