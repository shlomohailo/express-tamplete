
const countries = require('../models/model-travel')
const getIndex = (req) => {
    const countryId = countries.find(item => item.id == req.params.id);
    const countryIndex = countries.indexOf(countryId);
    return countryIndex;
}

const getCountries = (req, res) => {
    countries ? res.send({ message: "success to get data", countries }) : res.send('no countries');

}
const createNewCountry = (req, res) => {
    const data = req.body.data;
    countries.push(data)
    data ? res.send('create new country success') : res.send('not success a new country ')
}

const updateCountry = (req, res) => {
    const countryIndex = getIndex(req);
    if (countryIndex > -1) {
        countries[countryIndex] = req.body.data;
        return res.send('success update country')
    }
    return res.send(`cannot update country`)
}
const deleteCountry = (req, res) => {
    const startIndex = getIndex(req);
    if (startIndex > -1) {
        countries.splice(startIndex, 1);
        return res.send(countries)
    }
    return res.send(`Cannot delete country`);
}
const getCountryById = (req, res) => {
    const countryById = countries.find(item => item.id == req.params.id)
    countryById ? res.send(countryById) : res.send('no country found ')
}


module.exports = {
    getCountries,
    createNewCountry,
    updateCountry,
    deleteCountry,
    getCountryById
}