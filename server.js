const dotenv = require('dotenv');
dotenv.config({path: './config.env'})
const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT;


const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'hello'
    })
})

app.listen(PORT, (err) => {
    err ? console.log(err) :
console.log(`Server running on ${PORT}...`)
})