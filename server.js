
const dotenv =require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const countriesRouter = require('./routes/travel-router');
const airlinesRouter = require('./routes/airlines-router');
const flightsRouter = require('./routes/flights-router');
const users = require('./models/model-users');

const app = express();

const port = 5000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// const myWiddleware = (req, res, next) => {
//     // console.log('widdleware created');
//     if (!req.params) {
//         console.log(req.params);
//     }
//     console.log('no data')


//     next();
// }

// const widdlewareUrl = (req, res, next) => {
//     switch (req.url) {
//         case '/countries':
//             console.log('url countries')
//             return;
//         case '/airlines':
//             console.log('url airlines')
//             return;
//         case '/flights':
//             console.log('url flights')
//             return;
//         default:
//             return 'basic url';
//     }
//     next();
// }

// const widdlewareFlights = (req, res, next) => {
//     if (req.method === "POST") {
//         console.log('this is flights');
//         return next();
//     }
//     console.log(`can't post`)


// }

// app.use(myWiddleware);
// app.use(widdlewareUrl);

// const usersWiddleware = (req, res, next) => {
//     const user = users.find(itemEmail => itemEmail.email == req.body.email);
//     if (!user) res.send('email not found');
//     else if (user.password == req.body.password) {
//         res.send("welcome")
//         next()
//     }
//     res.send("password not match")
// }


app.use('/countries', countriesRouter);
app.use('/airlines', airlinesRouter);
app.use('/flights', flightsRouter);



app.get('/', (req, res) => {
    res.send({ massage: 'create server travel success' })
});

app.listen(port, () => {
    console.log(`server listen on port: ${port}`)
});