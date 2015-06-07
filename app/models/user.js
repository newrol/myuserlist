var properties = require('properties').properties;	//Import properties file, and choose properties object
var mongoose   = require('mongoose');	
var dbSchema   = require(properties.path + 'app/db/dbSchema')


var User = mongoose.model('user', dbSchema.userSchema); 

	User.prototype.setNick = function(userNick){
		this.nick = userNick;
	};
	
	User.prototype.setName = function(userName){
		this.name = userName;
	};

	User.prototype.setSurname = function(userSurname){
		this.surname = userSurname;
	};

	User.prototype.setMail = function(userMail){
		this.mail = userMail;
	};

	//El id lo podremos obtener pero dejaros que mongoose trate con el
	User.prototype.getId = function(){
		return this._id;
	}

	User.prototype.getNick = function(){
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

