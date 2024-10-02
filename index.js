import express from 'express';
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';


//  Connect to database
await  mongoose.connect('mongodb+srv://todo-api:todo-api@grow-mest.h4gip.mongodb.net/todo-db?retryWrites=true&w=majority&appName=grow-mest');

// Create an express app
const app = express();

// Use routes
app.use(todoRouter);
app.use(userRouter);


//  Listen for incoming requests
app.listen(3000, () => {
    console.log('app is listening on port 3000');
});