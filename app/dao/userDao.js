var properties = require('properties').properties;      // Import properties file
var UserModel = require(properties.path + 'app/models/user').User;      // Import Oportunity model.

/*
  Function userDao constructor.
*/
function UserDao(){

  
  this.create = function(user, callback){
    user.save(function(err, user){
      if(err) callback(err);
      else    callback(user);
    });
  }; 

  this.delete = function(user, callback){
      user.remove(callback);
  };

  
  this.update = function(user, callback){
      user.update(callback);
  };


  this.findByNick = function(userNick, callback){
      var query = UserModel.findOne({'title' : userNick});
      
      query.exec(function(err, user){
        if (err) callback(error);
        else callback(user);
      });    
  };

  
  this.findById = function(userId, callback){
     var user = new UserModel();

      var query = UserModel.findOne({'_id' : userId});
      
      query.exec(function(err, user){
        if (err) callback(err);
        else callback(user);
      });    
  }

  this.findAll = function(callback){
    
    var query = UserModel.find({});

    query.exec(function(err, users){
      if(err) callback(err);
      else callback(users);
    });
  };
}
exports.UserDao = UserDao