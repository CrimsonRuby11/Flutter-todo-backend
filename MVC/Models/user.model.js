const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const db = require('../../config/db');


const { Schema } = mongoose;

const userSchema = new Schema(
    {
        aadhar: {
            type: String,
            required: true,
            unique: true
        },
        pin: {
            type: String,
            required: true,
        }
    }
);

userSchema.pre('save', async function() {
    try {
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashPass = await bcrypt.hash(user.pin, salt);
        user.pin = hashPass;
    } catch(err) {
        throw err;
    }
});

userSchema.methods.comparePin = async function(userpin) {
    try {
        const matched = await bcrypt.compare(userpin, this.pin);
        return matched;
    } catch(err) {
        throw err;
    }
}

const userModel = db.model('user', userSchema);

module.exports = userModel;