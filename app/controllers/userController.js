var properties = require('properties').properties;							//Import properties file
	 	
var UserModel  	   =  require(properties.path + 'app/models/user').User; 
var UserDaoModel    = require(properties.path + 'app/dao/userDao').UserDao	

/*
	UserController prototype
	Callbacks status code based on http status codes http://en.wikipedia.org/wiki/List_of_HTTP_status_codes.
*/
function UserController(){

	var userDao = new UserDaoModel();

	/*	
		Create new oportunity, test userName exists
	*/	
	this.createUser = function(user, callback){
		userDao.create(user, function(data){
			//if the result is an instance of userMongoose Schema it was created:
			if(data instanceof UserModel) callback({status : 201, data : data}); //If user has been created return correct value 201 and the user.
			else if (data.code === 11000) callback({status : 409, data: 'this user already exist'});
			else{
				console.log('error', " UserController: Could not Create user:" + data);
				callback({status: 500, data: data});
			} 	
		});
	};
	
	
	/*
		Find all opportunties
	*/	
	this.findAllUsers = function(callback){
    	userDao.findAll(function(data){
    		if(data === null)callback({status: 204, data: 'There are not users'});
    		else if(data[1] instanceof UserModel) callback({status : 200, data : data});
    		else{
				console.log('error', " UserController: Could not find All users:" + data);
				callback({status: 500, data: data});
			} 	 
    	});
  	};
}	
exports.UserController = UserController;
