const airlines = require('../models/model-airlines');

const getIndexAirlines = (req) => {
    const airlinesId = airlines.find(item => item.id == req.params.id);
    const airlinesIndex = airlines.indexOf(airlinesId);
    return airlinesIndex;
}
const getAllAirlines = (req, res) => {
    airlines ? res.send({ message: "success to get all airlines", airlines }) : res.send('no airlines')
}

const createNewAirlines = (req, res) => {
    const data = req.body.data;
    airlines.push(data);
    data ? res.send('create a new airlines') : res.send('not success to create a new airlines')
}
const updateAirlines = (req, res) => {
    const airlinesIndex = getIndexAirlines(req);
    if (airlinesIndex > -1) {
        airlines[airlinesIndex] = req.body.data;
        res.send('success update airlines')
    }
    res.send(`cannot update airlines`)

}


const deleteAirlines = (req, res) => {
    const airlinesIndexToDelete = getIndexAirlines(req);
    if (airlinesIndexToDelete > -1) {
        airlines.splice(airlinesIndexToDelete, 1);
        res.send(airlines)
    }
    res.send('cannot delete airlines')
}
const getAirlinesById = (req, res) => {
    const airlinesById = airlines.find(item => item.id == req.params.id);
    airlinesById ? res.send(airlinesById) : res.send('cannot find airlines');

}
const gteAirlinesByCountry = (req, res) => {

    const airlinesByCountry = airlines.filter(item => item.country == req.params.country);

    airlinesByCountry ? res.send(airlinesByCountry) : res.send('no country airlines found');
}

const getAirlinesByName = (req, res) => {
    const airlinesByName = airlines.find(item => item.name == req.params.name);
    airlinesByName ? res.send(airlinesByName) : res.send('not found airlines');

}
module.exports = {
    getAllAirlines,
    createNewAirlines,
    updateAirlines,
    deleteAirlines,
    getAirlinesById,
    gteAirlinesByCountry,
    getAirlinesByName

}