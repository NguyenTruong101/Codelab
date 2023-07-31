
// import express from 'express';
// import { engine } from 'express-handlebars';

// import morgan from 'morgan';
// // const morgan = require('morgan');


// const app = express();
// const port = 3000;

// // HTTP logger
// app.use(morgan('combined'));

// // Temple engine
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });
// import {MongoClient} from 'mongodb';
const mongoose = require('mongoose')
require("dotenv").config()
const connect = async () => {
    try{
       await mongoose.connect('mongodb://localhost:27017/db_codelab')
       console.log('Kết nối tới DB thành công')
    }
    catch(err){
       console.log('Lỗi kết nối DB:',err)
    }
}
module.exports = {connect} 


// mongodb://localhost:27017