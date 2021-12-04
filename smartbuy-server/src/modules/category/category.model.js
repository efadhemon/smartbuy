const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

module.exports = mongoose.model("Category", categorySchema);
