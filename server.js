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

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connection successful...")
})

const shotSchema = new mongoose.Schema({
    shotType: String,
    club: String,
    targetHit: Boolean,
})

const Shot = mongoose.model('Shot', shotSchema);

const testShot = new Shot({
    shotType: 'chunked',
    club: '8 iron',
    targetHit: false,
})

testShot.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.log(err)
})

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'hello'
    })
})

app.listen(PORT, (err) => {
    err || console.log(`Server running on ${PORT}...`)
})