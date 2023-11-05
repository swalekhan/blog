import express from 'express';
import { createComment } from '../controller/comments/createComment.js';
import { deleteComment } from '../controller/comments/deleteComment.js';

const router = express.Router()
router.post('/comments', createComment)
router.delete('/comments/:id', deleteComment);

export default router;