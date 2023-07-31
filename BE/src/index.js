
import express from 'express';
import { engine } from 'express-handlebars';

import morgan from 'morgan';
// const morgan = require('morgan');


const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Temple engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

