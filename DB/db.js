const mongoose = require('mongoose')
const STRING_CONNECTION = process.env.CONNECTION_STRING;

mongoose.connect(STRING_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(error => {
        console.error('Connection error', error.message)
    })


const db = mongoose.connection;

module.exports = db; 