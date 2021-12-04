const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

const verify = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Access Denied");

    try {
        const verified = jwt.verify(token, config.token.secret);
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).send("Invalid Token");
    }
};

module.exports.verify = verify;
