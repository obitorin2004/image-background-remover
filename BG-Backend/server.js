import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/mongoDB.js';
import userRouter from './routes/userRoute.js';
import imageRouter from './routes/imageRoute.js';

dotenv.config()


connectDB()
const app = express()
const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/images', imageRouter)

app.get('/test', (req, res) => {
    console.log('Request received at /test');
    res.send('Server is working!');
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});

