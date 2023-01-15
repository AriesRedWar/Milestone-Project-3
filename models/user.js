require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt   = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { data: Buffer, type: String },
  email: { type: String },
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.verifyPassword = function(password) {
  return bcrypt.compareSync(password, this.user.password);
};

userSchema.methods.updateUser = function(request, response){
	this.user.name = request.body.name;
		 this.user.save();
	response.redirect('/user');
};

module.exports = mongoose.model("User", userSchema);