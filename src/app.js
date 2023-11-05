import express from 'express';
import postRouter from './routes/blog.js';
import commetRouter from './routes/comments.js';
import cors from 'cors';
import { DB } from './config/index.js'
const app = express()
const port = 3001;

app.use(cors())
app.use(express.json())
app.use('/api/v1', postRouter, commetRouter)


DB.sequelize.sync({ force: true }).then(() => {
    app.listen(port, () => {
        console.log(`server is runnig ${port}`)
    })
}).catch((err) => {
    console.log(err)
})