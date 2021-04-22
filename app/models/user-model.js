var async = require('async');
const constants = require('../../constants');

function User() {

}

User.prototype.addition = function (num1,num2, finalCallback) {
    async.waterfall([
        function (callback) {
            let res =  num1+num2;
            callback(null,res);
        }
    ], function (err,res) {
        finalCallback(err, res);
    });
};

module.exports = User;