var properties = require('properties').properties;	  //Import genrarl properties file.
    express    = require('express'); 	  //Import express.
    rest       = require('connect-rest') 
    mongoose   = require('mongoose');
	bodyParser = require('body-parser');

var app        = express();			  		//app creation con express.	

app.set('port', process.env.PORT || 3000);  //Set global port var to express
app.use(express.static(properties.path)); 	//add static folder to all files:

mongoose.connect(properties.databaseURI);

//api routes general values
var apiOptions = {
	context: '/api',
}

//body-parser and connect-rest libraries join
app.use( bodyParser.urlencoded( { extended: true } ) )
app.use( bodyParser.json() );

//add middleware apiOptions:
app.use(rest.rester(apiOptions));
//Importo las rutas hacia la api:	
require(properties.path + 'api/index')(rest);

app.use(express["static"](__dirname + '/public'));

//web route

app.get('/',function(req, res){
	res.sendFile(properties.path + 'site/public/views/controlPanel.html');
});


app.get('/create-user',function(req, res){
	res.sendFile(properties.path + 'site/public/views/create-user.html');
});


app.get('/lib',function(req, res){
	res.sendFile(properties.path + 'site/public/lib');
});


app.get('/styles',function(req, res){
	res.sendFile(properties.path + 'site/public/styles');
});


app.get('/controllers',function(req, res){
	res.sendFile(properties.path + 'site/public/controllers');
});

// custom 404 page.
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

// custom 500 page.
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});


//Run run the server.	
app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-C to terminate.' );
});

