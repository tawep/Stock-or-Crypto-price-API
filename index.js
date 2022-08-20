const express = require('express');
const stocksRouter = require('./routes/stocks');
const app = express();

//route
app.use('/apis/stocks', stocksRouter);
app.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>');
});
app.listen(3000, () => {
    console.log('Listening to port 3000');
});

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
const logger = require('./middleware/logger');
app.use(logger);