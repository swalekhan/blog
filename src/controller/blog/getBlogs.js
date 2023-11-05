import { DB } from "../../config/index.js"
const db = DB.blog

export const getBlogs = async (req, res) => {
    try {
        const blogs = await db.findAll({
            include:[DB.comment]
        })
        res.status(200).json(blogs);
    } catch (err) {
        console.log(err)
        res.json("internal error")
    }
}