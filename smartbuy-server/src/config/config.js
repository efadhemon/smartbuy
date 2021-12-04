const config = {
    bd: {
        uri: process.env.DB_URI,
    },
    token: {
        secret: process.env.TOKEN_SECRET,
    },
};

module.exports.config = config;
