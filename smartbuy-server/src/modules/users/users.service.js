const Users = require("./users.model");


module.exports.createUser = async function (user) {
    return Users.create(user);
};

module.exports.getUsers = async function () {
    return Users.find({});
};
