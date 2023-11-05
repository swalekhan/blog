import { DB } from '../../config/index.js'
const db = DB.comment
export const deleteComment = async (req, res) => {
    const id = req.params.id
    try {
        await db.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json({
            status: true,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}