const User = require("../user/user.model");
const { authValidation, BD_PHONE_NUMBER_PATTERN } = require("./auth.validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { config } = require("../../config/config");

module.exports.resister = async function (req, res) {
    // before registration data validation
    const { error } = authValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // checking if the user already in database
    const phoneExist = await User.findOne({ phone: req.body.phone });
    if (phoneExist)
        return res.status(400).send("Phone Number is already exits");

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // create a new user
    const newUser = new User({
        phone: req.body.phone,
        password: hashPassword,
    });
    const resistedUser = await newUser.save();
    
    // create and assign a token
    const token = jwt.sign({ _id: resistedUser._id }, config.token.secret);
    res.header("auth-token", token).send(token);
};

module.exports.login = async function (req, res) {
    // checking if the user is exist
    const user = await User.findOne({ phone: req.body.phone });
    if (!user) return res.status(400).send("Phone or Password is wrong");

    // Is the password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Phone or Password is wrong");

    // create and assign a token
    const token = jwt.sign({ _id: user._id }, config.token.secret);
    res.header("auth-token", token).send(token);
};
