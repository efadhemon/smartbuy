const Joi = require("joi");
const { BD_PHONE_NUMBER_PATTERN } = require("../../utils/regex");

const authValidation = (data) => {
    const schema = Joi.object({
        phone: Joi.string().pattern(new RegExp(BD_PHONE_NUMBER_PATTERN)).message(`${data.phone} is not a valid phone number`),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(data);
};

module.exports.authValidation = authValidation;
