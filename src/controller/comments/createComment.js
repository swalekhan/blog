import { DB } from '../../config/index.js'
const db = DB.comment
export const createComment = async (req, res) => {
    const { blogId, content } = req.body;
    try {
        const comment = await db.create({ blogId, content })
        res.status(201).json(comment)
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}