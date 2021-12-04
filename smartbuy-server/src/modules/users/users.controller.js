const userService = require("./users.service");

module.exports.createUser = async function (req, res) {
    const user = req.body;
    // console.log(user);
    const createdUser = await userService.createUser(user);
    return res.status(200).json(createdUser);
};

module.exports.getUsers = async function (req, res) {
    const users = await userService.getUsers();
    return res.json(users);
};
