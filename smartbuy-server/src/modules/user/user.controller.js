const { responseData } = require("../../utils/responseData");
const userService = require("./user.service");
const User = require("./user.model");
const bcrypt = require("bcryptjs");
const { authValidation } = require("../auth/auth.validator");

module.exports.createUser = async function (req, res) {
    // before registration data validation
    const { error } = authValidation({
        phone: req.body.phone,
        password: req.body.password,
    });
    if (error) return res.send({ message: error.details[0].message });

    // checking if the user already in database
    const phoneExist = await User.findOne({ phone: req.body.phone });
    if (phoneExist)
        return res.send({ message: "Phone Number is already exits" });

    const emailExist = await User.findOne({ phone: req.body.email });
    if (emailExist) return res.send({ message: "Email is already exits" });

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = {
        ...req.body,
        password: hashPassword,
    };

    const createdUser = await userService.createUser(newUser);
    return res.status(200).send(responseData(createdUser));
};

module.exports.getUsers = async function (req, res) {
    const users = await userService.getUsers();
    return res.send(responseData(users, req.query.page, req.query.take));
};

module.exports.getUserById = async function (req, res) {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    return res.send(responseData(user));
};

module.exports.updateUserById = async function (req, res) {
    const userId = req.params.id;
    const updatedData = req.body;
    const user = await userService.updateUserById(userId, updatedData);
    return res.send(responseData(user));
};

module.exports.deleteUserById = async function (req, res) {
    const userId = req.params.id;
    const user = await userService.deleteUserById(userId);
    return res.send(responseData(user));
};
