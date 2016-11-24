module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'test-skill' );
//var value1;
//GLOBAL.x= value1;
GLOBAL.x;

/*var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({port:3000});

/*wss.on("connection", function(ws){
	
	ws.on("message", function(message){
		
		wss.clients.forEach(function(client){
			client.send(value1);
		});
		
	});*/
	/*wss.clients.forEach(function(client){
		client.send(value1);
	});
	
	
	ws.send("Welcome to Couture chat" + value1);
}); */


app.launch( function( request, response ) {
	response.say( 'Welcome to Couture Digital' ).reprompt( 'You can ask hom to turn on tv or switch on lights.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('sayNumber',
  {
    "slots":{"number":"NUMBER"}
	,"utterances":[ 
		"say the number {1-100|number}",
		"give me the number {!-100|number}",
		"tell me the number {!-100|number}",
		"I want to hear you say the number {!-100|number}"]
  },
  function(request,response) {
    var number = request.slot('number');
    response.say("You asked for the number "+number);
  }
);

app.intent('SwitchInputIntent',
  {
  },
  function(request,response) {
    x = request.slot('InputType');
    response.say(x + " " +"is now selected ");
  }
);
 module.exports = app;
 //exports.value1 = value1;
// Also try to server an html page with alexa's data


/*exports.handler = function(event, context){
    context.done(null, {"hello":"world, This is Yves"});
};*/

