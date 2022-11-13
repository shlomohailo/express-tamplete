const router = require('express').Router();
const { getCountries, createNewCountry, updateCountry,deleteCountry,getCountryById } = require('../controllers/travel-ctrl');

router.get('/', getCountries);
router.post('/saveData', createNewCountry);
router.put('/update/:id', updateCountry);
router.delete('/delete/:id',deleteCountry);
router.get('/byId/:id',getCountryById)
module.exports = router;