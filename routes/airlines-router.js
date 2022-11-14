const router = require('express').Router();
const { gteAirlinesByCountry, getAllAirlines, createNewAirlines, updateAirlines, deleteAirlines, getAirlinesById, getAirlinesByName } = require('../controllers/airlines-ctrl');
router.get('/', getAllAirlines);
router.post('/saveData', createNewAirlines);
router.put('/update/:id', updateAirlines);
router.delete('/delete/:id', deleteAirlines);
router.get('/byId/:id', getAirlinesById);
router.get('/byCountry/:country', gteAirlinesByCountry);
router.get('/byName/:name', getAirlinesByName);



module.exports = router;