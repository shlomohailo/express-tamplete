const router = require("express").Router();
const {
    getAllFlight,
    createFlight,
    updateFlight,
    deleteFlight,
    getFlightById,
    getFlightByNumberFlight,
    getFirstClassFlights,
    getFlightByDepartureTime
} = require("../controllers/flights-ctrl");

router.get("/", getAllFlight);
router.post("/createFlight", createFlight);
router.put("/updateFlight/:id", updateFlight);
router.delete("/deleteFlight/:id", deleteFlight);
router.get("/byId/:id", getFlightById);
router.get("/byFlightNum/:flightNum", getFlightByNumberFlight);
router.get('/byFirstClass/:firstClass', getFirstClassFlights);
router.get('/byDepartureTime/:departureTime', getFlightByDepartureTime);

module.exports = router;
