import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/mongoDB.js';
import userRouter from './routes/userRoute.js';

dotenv.config()


connectDB()
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api/users', userRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    })

 