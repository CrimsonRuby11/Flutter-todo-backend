const userModel = require('../Models/user.model');
const jwt = require('jsonwebtoken');

class UserService {
    static async registerUser(aadhar, pin) {
        try {
            const createUser = new userModel({aadhar, pin});
            return await createUser.save();
        } catch(err) {
            throw err;
        }
    }

    static async checkAadhar(aadhar) {
        try {
            return await userModel.findOne({aadhar});
        } catch(err) {
            throw err;
        }
    }

    static async generateToken(tokenData, key, expiry) {
        return jwt.sign(tokenData, key, {expiresIn: expiry});
    }
}

module.exports = UserService;