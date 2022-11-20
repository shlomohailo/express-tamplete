const { getAllUsers,createNewUser } = require('../controllers/users-ctrl');
const router = require('express').Router();


// router.get('/', getAllUsers);
router.post('/login',createNewUser)

module.exports = router;


