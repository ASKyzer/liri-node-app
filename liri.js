require("dotenv").config(); // require the .env file

var fs = require("fs");

var keys = require("./keys.js"); // require the keys.js file
var spotify = new spotify(keys.spotify); // reads the spotify ids from the keys.js file
var client = new twitter(keys.twitter); // reads the twitter ids and tokens from the keys.js file
var spotify = require("node-spotify-api"); // requires the npm package for spotify
var twitter = require("twitter"); // requires the npm package for twitter

var userCommand = process.argv[2]; // assign the variable command to the user entry

// create a function that will read the user entry and see if it's one of the following: `my-tweets`,`spotify-this-song`,`movie-this`, or`do-what-it-says`
var readingCommand = function(){
  switch (userCommand) {
    case 'my-tweet': // if the user's command is 'my-tweet' then
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

  }

}


// var params = {adrianfsdev: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });
//
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
//
// console.log(data);
// });
