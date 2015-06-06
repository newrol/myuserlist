var mongoose   = require('mongoose');				//Import mongoose library {http://mongoosejs.com}

var userSchema = new mongoose.Schema({
    nick  : { type: String, required: true, unique: true },
   	name : { type :String, required:true },
	surname   : { type :String, required:true },
	mail : String,
});
exports.userSchema = userSchema;
