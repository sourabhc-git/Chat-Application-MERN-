const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    isAvatarimageSet: {
        type: Boolean,
        default: false,
    },
    avtarImage: {
        type: String,
        default: "",
    },
}
);

module.exports = mongoose.model("Users", userSchema);