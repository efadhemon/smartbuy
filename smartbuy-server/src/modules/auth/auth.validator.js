const BD_PHONE_NUMBER_PATTERN = /^(?:\+88|88)?(01[3-9]\d{8})$/;
const Joi = require("joi");

const authValidation = (data) => {
    const schema = Joi.object({
        phone: Joi.string().pattern(new RegExp(BD_PHONE_NUMBER_PATTERN)),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(data);
};

module.exports.authValidation = authValidation;
module.exports.BD_PHONE_NUMBER_PATTERN = BD_PHONE_NUMBER_PATTERN;
