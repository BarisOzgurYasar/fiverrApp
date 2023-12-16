import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import gigRoute from './routes/gigRoute.js';
import orderRoute from './routes/orderRoute.js';
import conversationRoute from './routes/conversationRoute.js';
import messageRoute from './routes/messageRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import authRoute from './routes/authRoute.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

mongoose.set('strictQuery', true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to DB');
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/orders', orderRoute);
app.use('/api/conversation', conversationRoute);
app.use('/api/message', messageRoute);
app.use('/api/reviews', reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log('Backend server running');
});
