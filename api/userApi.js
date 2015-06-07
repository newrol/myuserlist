var properties = require('properties').properties;
var  rest = require(properties.path + 'api/index').rest;

var UserModel           = require(properties.path + 'app/models/user').User;
var UserControllerModel = require(properties.path + 'app/controllers/userController').UserController;

var userController = new UserControllerModel();

	
module.exports = function(rest){

	rest.post('/user', function(req, content, callback){
		var user = new UserModel();
		user.setNick(req.body.nick);
		user.setName(req.body.name);
		user.setSurname(req.body.surname);
		user.setMail(req.body.mail);	

		userController.createUser(user, function(user){
			callback(null, { id: user.data.id }, { statusCode: user.status });
		});	
	});


    rest.get('/allUsers', function(req, content, callback){
		userController.findAllUsers(function(users){
			callback(null, users.data.map(function(user){ return user}), { statusCode: users.status } );
		});	
	});
};
