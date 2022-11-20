const flights = require('../models/model-flights');

const getFlightIndex = (req) => {
    const flightsId = flights.find(item => item.id == req.params.id);
    const flightIndex = flights.indexOf(flightsId);
    return flightIndex;
}

const getAllFlight = (req, res) => {
    flights ? res.send(flights) : res.send('not found flights');
}
const createFlight = (req, res) => {
    const data = req.body.data;
    flights.push(data);
    data ? res.send('create new flight success') : res.send(`can't create new flight`);
}

const updateFlight = (req, res) => {
    const flightUpdateIndex = getFlightIndex(req);
    if (flightUpdateIndex > -1) {
        flights[flightUpdateIndex] = req.body.data;
        res.send('success update flight')
    }
    res.send(`can't update flight`)
}
const deleteFlight = (req, res) => {
    const itemIndex = getFlightIndex(req);
    if (itemIndex > -1) {
        flights.splice(itemIndex, 1)
        res.send("success delete flight")
    }
    res.send(`can't found flight to delete`);

}
const getFlightById = (req, res) => {

    const flightById = getFlightIndex(req);
    if (flightById > -1) {
        res.send(flights[flightById])
    }
    res.send('flight not found')

}
const getFlightByNumberFlight = (req, res) => {
    const flightByNumberFlight = flights.find(item => item.flightNum == req.params.flightNum);
    flightByNumberFlight ? res.send(flightByNumberFlight) : res.send('flight not found');

}
const getFirstClassFlights = (req, res) => {
    const firstClassAvailable = flights.filter(item => item.firstClass == true);

    firstClassAvailable ? res.send(firstClassAvailable) : res.send("not found");
}
const getFlightByDepartureTime = (req, res) => {
    const flightByDepartureTime = flights.filter(item => item.departureFlight == req.params.departureFlight);
    flightByDepartureTime ? res.send(flightByDepartureTime) : res.send('not found');
}
module.exports = {
    getAllFlight,
    createFlight,
    updateFlight,
    deleteFlight,
    getFlightById,
    getFlightByNumberFlight,
    getFirstClassFlights,
    getFlightByDepartureTime
}