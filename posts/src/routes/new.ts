import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";
import Post from "../models/post";
import { requireAuth } from "../middlewares/require-auth"

const router = express.Router();

router.post(
    '/api/posts',
    requireAuth, 
    [
        body('title').not().isEmpty().withMessage('Title must be provided').isString().withMessage('Title must be text'),
        body('content').not().isEmpty().withMessage('Content must be provided').isString().withMessage('Content must be text'),
    ],
    validateRequest,
    async (req:Request, res:Response) => {
    
    const {title, content} = req.body;        

    const post = Post.build({
        title,
        content,
        owner:req.currentUser!.id
    });

    await post.save();

    res.status(201).send(post)
})

export {router as newPostRouter};