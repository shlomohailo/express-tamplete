const { getAllUsers,createNewUser } = require('../controllers/users-ctrl');
const router = require('express').Router();


// router.get('/', getAllUsers);
router.post('/login',createNewUser)

module.exports = router;


const usersRoute = require('express').Router();
const {getAllData,addUser, checkUserData, getUserRegistrationData, checkUserAge, getUserFullData} = require('../controllers/users-crl')

usersRoute.get('/',getAllData);
usersRoute.post('/login',addUser);
usersRoute.post('/login/byAge',checkUserAge);
usersRoute.post('/login/email',checkUserData);
usersRoute.post('/userRegister',getUserRegistrationData);
usersRoute.put('/updateUserData',getUserFullData);

module.exports= usersRoute