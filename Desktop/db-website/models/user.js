const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const joi = require('joi')
const passwordComplexity = require('joi-password-complexity')


const userSchema = new mongoose.Schema({
    fistName: {type: String, require: true},
    lastName: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user",userSchema)

const validate = (data) => {
    const Schema = joi.object({
        fistName: joi.String().require().label("FistName"),
        lastName: joi.String().require().label("LastName"),
        email: joi.string().email().require().label("Email"),
        password: passwordComplexity().require().label("password")

    })
    return Schema.validate(data)
}

module.expots = {User, validate}