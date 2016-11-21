module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'test-skill' );
var value1;


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
    value1 = request.slot('InputType');
    response.say(value1 + " " +"is now selected ");
  }
);

//module.exports = value1 + app;
//module.exports = app;
// Also try context.succeed();
// Also try to server an html page with alexa's data
module.exports = value1;

