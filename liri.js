require("dotenv").config(); // require the .env file

var fs = require("fs");

var keys = require("./keys.js"); // require the keys.js file
// var spotify = new spotify(keys.spotify); // reads the spotify ids from the keys.js file
var client = new Twitter(keys.twitter); // reads the twitter ids and tokens from the keys.js file
var spotify = require("node-spotify-api"); // requires the npm package for spotify
var twitter = require("twitter"); // requires the npm package for twitter

var userCommand = process.argv[2]; // assign the variable command to the user entry
var nameOfSong = process.argv[3]; // name of the song that follows the 'spotify-this-song command'
var nameOfMovie = process.argv[3];
// create a function that will read the user entry and see if it's one of the following: `my-tweets`,`spotify-this-song`,`movie-this`, or`do-what-it-says`
var readCommand = function(){
  switch (userCommand) {
    case 'my-tweets': // if the user's command is 'my-tweet' then
        getTweets(); // call the getTweets function
      break;
    case 'spotify-this-song': // if the commasnd is this then
        getSpotify(); // call the getSpotify function
      break;
    case 'movie-this': // if the user command is this
        getMovie(); // call the getMovie function
      break;
    case 'do-what-it-says': // if the user command is this
        getRandom(); // call the get random function to take the text inside of random.txt and then use it to call one of LIRI's commands.
      break;
    default:

      break;

      console.log(userCommand);
  } // end of switch/case

} // end of the readCommand function

// if the user command is 'my-tweets', create a function that will retrieve your latest 20 tweets and when they were created.
var getTweets = function(){

  // assign the numberOfTweets variable to the number to tweets we want to display which is 20
  var numOfTweets = 20;

  // per twitter's npm documentation to get the user's latest tweets
  var params = {screen_name: 'adrianfsdev'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {

        // loop through the last twenty tweets and output when the tweet was created and what the tweet says.
        for (var i = 0; i<numOfTweets; i++){
          // log the tweet and when it was created
          console.log("You said: " + tweets[i].text + " on " + tweets[i].created_at);

      } // end of if statement
    }); // end of twitter params

} // end of getTweets function

// if the user command is 'spotify-this-song + song name', create a function that will show the following information:
    // the artist(s),
    // song name,
    // preview link of the song from spotify and
    // the album that song is from.
var getSpotify = function(){

} // end of getSpotify function

// if the user command is 'movie-this', create a function that will output the following information:
    // * Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.
var getMovie = function(){

  // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

} // end of getMovie function.

// if the user command is 'do-what-it-says', then the  LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
var getRandom = function(){


} // end of getRandom function

///////////////////////////
// INITIATE THE PROGRAM //
/////////////////////////

readCommand();


////////////////////////////////////
////   BONUS BONUS BONUS BONUS /////
///////////////////////////////////
// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.
