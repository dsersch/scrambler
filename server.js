const dotenv = require('dotenv');
dotenv.config({path: './config.env'})
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const PORT = process.env.PORT;
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
)
const shotRouter = require('./routes/ShotRoutes.js')
const playerRouter = require('./routes/PlayerRoutes.js')

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connection successful...")
})


const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/shots', shotRouter)
app.use('/players', playerRouter)

app.listen(PORT, (err) => {
    err || console.log(`Server running on ${PORT}...`)
})