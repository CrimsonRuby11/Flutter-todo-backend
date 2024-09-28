const userModel = require('../Models/user.model');
const UserService = require('../Services/user.services');

exports.register = async(req, res, next) => {
    try {
        const {aadhar, pin} = req.body;
        const successRes = await UserService.registerUser(aadhar, pin);
        res.json({status: true, success: "User registered successfully!"});
    } catch(err) {
        throw err;
    }
}

exports.login = async(req, res, next) => {
    try {
        
        const {aadhar, pin} = req.body;

        const user = await UserService.checkAadhar(aadhar);

        if(!user) {
            throw new Error("User does not exist!");
        }

        const isMatched = user.comparePin(pin);
        if(!isMatched) {
            throw new Error("Invalid password!");
        }

        let tokenData = {
            _id:user._id,
            aadhar: user.aadhar,
        };

        const token = await UserService.generateToken(tokenData, "123", '1h');

        res.status(200).json({status: true, token: token});

    } catch(err) {
        throw err;
    }
}