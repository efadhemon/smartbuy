const User = require("./user.model");

module.exports.createUser = async function (user) {
    return User.create(user);
};

module.exports.getUsers = async function () {
    return User.find({});
};

