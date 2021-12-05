const User = require("./user.model");

module.exports.createUser = async function (user) {


    return User.create(user);
};

module.exports.getUsers = async function () {
    return User.find({});
};

module.exports.getUserById = async function (userId) {
    return User.findById(userId);
};

module.exports.updateUserById = async function (userId, update) {
    return User.findByIdAndUpdate(userId, update, { new: true });
};

module.exports.deleteUserById = async function (userId) {
    return User.findByIdAndDelete(userId);
};