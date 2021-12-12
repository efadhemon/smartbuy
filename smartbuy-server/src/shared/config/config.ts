require("dotenv").config();

const config = {
    bd: {
        uri: process.env.DB_URI || "http://localhost:3000/",
    },
    token: {
        secret: process.env.TOKEN_SECRET || "gkfdvbklfbreriobrtbjrtjbtgdsg",
    },
    server: {
        port: process.env.PORT || 3000,
    },
    cloudinary:{
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key:  process.env.CLOUDINARY_API_KEY,
        api_secret:  process.env.CLOUDINARY_API_SECRET,
    }
};

export default config;
