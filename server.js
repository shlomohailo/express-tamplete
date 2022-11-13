const express = require('express');
const cors = require('cors');

const app = express();

const port = 8080;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send({ massage: 'create server success' })
});

app.listen(port,()=>{
    console.log(`server listen on port: ${port}`)
});