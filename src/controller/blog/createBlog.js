import { DB } from "../../config/index.js"
const db = DB.blog

export const createBlog = async (req, res) => {
    const {content, title, author} = req.body
    try {
        const result = await db.create({content, title, author})
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json("internal error")
    }
}