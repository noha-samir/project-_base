var router = require('express').Router();
var UserController = require('../controllers/user-controller');
var UserValidation = require('../validations/user-validation');

router.post('/add', UserValidation.validAddition, UserController.controllerAddition);

module.exports = router;