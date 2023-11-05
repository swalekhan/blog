import express from 'express';
import { createBlog, getBlogs } from '../controller/blog/index.js';

const router = express.Router()

router.route('/blogs')
    .get(getBlogs)
    .post(createBlog);

export default router;