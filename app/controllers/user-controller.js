var User = require('../models/user-model');
var jwt = require('jsonwebtoken');
//var conn = require('../../database');
var async = require('async');
const constants = require('../../constants');

module.exports.controllerAddition = function (req, res, next) {
    let aUser = new User();
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    aUser.addition(num1,num2, function (err, result) {
        if (err) {
            next(err);
        }
        else {
            res.status(200).json(result);
        }
    });
};

