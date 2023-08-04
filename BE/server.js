// const express = require('express');
// const bodyParser = require('body-parser')

// const app = express();
// const PORT = process.env.PORT || 8080;

// app.use(bodyParser.json())

// app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

// app.get('/', (req, res) => {
//     res.send(`Listening on ${ PORT }`);
// })


import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import httpError from 'http-errors';
import dotenv from 'dotenv';
import {Connect} from './src/config/connect.js'
// import userRouter from './src/routers/updateRouter.js'
// import updateRouter from '.src//routers/updateRouter.js'

const app = express();

dotenv.config();
app.set('json spaces', 4);
app.use(cors(process.env.FRONT_END_HOST));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET));

//Connect to MongoDB
Connect(process.env.MONGODB_URL);

//Use Router
// app.use('/api/users', userRouter);
// app.use('/api/update', updateRouter);

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

app.listen(3000, () => {
    console.log('Server started on port 8080');
});