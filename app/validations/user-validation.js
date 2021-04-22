const Joi = require('joi');

// schema options
const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true // remove unknown props
};

// create schema object
const validAdditionSchema = Joi.object().keys({
    num1: Joi.number().error(new Error("Invalid number!!!")),
    num2:  Joi.number().error(new Error("Invalid number!!!"))
});

module.exports.validAddition = function (req, res, next) {
    // validate request body against schema
    const { error, value } = validAdditionSchema.validate(req.body, options);
    if (error) {
        // on fail return comma separated errors
        let Err = new Error();
        Err.message = `Validation error: ${error.message}`;
        next(Err);
    } else {
        // on success replace req.body with validated value and trigger next middleware function
        req.body = value;
        next();
    }
}