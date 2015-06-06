var properties = require('properties').properties;	//Import properties file, and choose properties object
var mongoose   = require('mongoose');	
var dbSchema   = require(properties.path + 'app/db/dbSchema')


var User = mongoose.model('user', dbSchema.userSchema); 

	User.prototype.setNick = function(userNick){
		this.title = opportunityTittle;
	};
	
	User.prototype.setName = function(userName){
		this.header = opportunityHeader;
	};

	User.prototype.setSurname = function(userSurname){
		this.body = opportunityHeader;
	};


	User.prototype.setMail = function(userMail){
		this.photoPath = opportunityPhotoPath;
	};


	//El id lo podremos obtener pero dejaros que mongoose trate con el
	User.prototype.getId = function(){
		return this._id;
	}

	user.prototype.getNick = function(){
		return this.nick;
	}

	User.prototype.getName = function(){
		return this.title;
	};

	User.prototype.getSurname = function(){
		return this.surname;
	};

	User.prototype.getMail= function(){
		return this.mail;
	};
//Exportarmos este modelo de usuario:	
exports.User = User;

