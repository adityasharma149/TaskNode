import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';

const app = express();
const ports = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB CONNECT
connectDB();

//ROUTES
app.use('/api/users', userRouter);



app.get('/', (req, res) => {
    res.send('API is running...');
}); 

app.listen(ports, () => {
    console.log(`Server is running on port ${ports}`);
});
