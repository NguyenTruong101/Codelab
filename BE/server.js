

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import httpError from 'http-errors';
import dotenv from 'dotenv';
import {Connect} from './src/config/connect.js';
import userRouter from './src/routers/userRouter.js';
import updateRouter from './src/routers/updateRouter.js';
import adminRouter from './src/routers/adminRouter.js';


const app = express();

dotenv.config();
app.set('json spaces', 4);
app.use(cors(process.env.FRONT_END_HOST));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET));

//Connect to MongoDB
Connect(process.env.MONGODB_URL);

// Use Router
app.use('/api/users', userRouter);
app.use('/api/update', updateRouter);
app.use('api/admin', adminRouter);

//404 handler and pass to errror handler
app.use((request, response, next) => {
    next(
        httpError(
            404, "Not Found"
        ));
});

//error handler
app.use((error, request, response, next) => {
    response.status(
        error.status || 500
    );
    response.json({
        error: {
            status: error.status,
            message: error.message
        }
    });
});

app.listen(8080, () => {
    console.log('Server started on port 8080');
});