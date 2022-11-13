const express = require('express');
const cors = require('cors');
const countriesRouter = require('./routes/travel-router')
const app = express();

const port = 5000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/countries', countriesRouter);

app.get('/', (req, res) => {
    res.send({ massage: 'create server travel success' })
});

app.listen(port, () => {
    console.log(`server listen on port: ${port}`)
});