require("dotenv").config(); // require the .env file

var fs = require("fs");

var keys = require("./keys.js"); // require the keys.js file
// var spotify = new spotify(keys.spotify); // reads the spotify ids from the keys.js file
var spotify = require("node-spotify-api"); // requires the npm package for spotify
var twitter = require("twitter"); // requires the npm package for twitter
var client = new twitter(keys.twitter); // reads the twitter ids and tokens from the keys.js file
var spotify = new spotify(keys.spotify);

var userCommand = process.argv[2]; // assign the variable command to the user entry
var nameOfSong = process.argv[3]; // name of the song that follows the 'spotify-this-song command'
var nameOfMovie = process.argv[3]; // name of the movie that follows the movie-this command

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
          console.log((i+1) + ". You said: " + tweets[i].text + " on " + tweets[i].created_at);
          console.log(""); // adds a blank line between tweets to make it more legible
        } // end of for loop
      } // end of if statement
    }); // end of twitter params

} // end of getTweets function

// if the user command is 'spotify-this-song + song name', create a function that will show the following information:
    // song name,
    // the artist(s),
    // the album that song is from.
    // preview link of the song from spotify and

// create a function to switch the first letter of the word in the string to uppercase
function upperCase (nameOfSong){
  return nameOfSong.toUpperCase();
}
// grab the first letter of each word of the string
function titleCase(nameOfSong){
	var firstLetter = /(^|\s)[a-z]/g;
	return nameOfSong.replace(firstLetter, upperCase);
}

var getSpotify = function(){

  var track;

  if (nameOfSong != null){
    track = titleCase(nameOfSong);
  } else {
    track = "Yesterday"
  }

    // per spoitfy's npm documentation to search their catalog via track name
    spotify.search({ type: 'track', query: track }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } // end of if statement

    // assign the returned data items to the variable results
    var results = data.tracks.items;
    //  assign matched song into an array so we can push songs that match the title into it
    var songsMatched = [];
    // loop through the results to see how many songs match your track
    for (var i = 0; i < 20; i++){
      if (results[i].name == track){
        songsMatched.push(i);
      }

    } // end of loop to search for songs that match your tracks

    // tell the user how many songs match their search
    if (songsMatched.length > 0){
      console.log("There are " + songsMatched.length + " songs that matched your search");
    }
    // if no matches, then tell the user
    else if (songsMatched.length === 0) {
      console.log("There are no songs that match your search.");
    }

    // create another loop to go through the tracks and get the info for each one
    for (var j =0; j < songsMatched.length; j++) {
      console.log("");
      console.log("Artist: " + results[songsMatched[j]].artists[0].name); // names of artist(s)
      console.log("Title: " + results[songsMatched[j]].name); // name of the song
      console.log("Album name: " + results[[songsMatched[j]]].album.name); // album names
      // check to see if the preview value is empty
      if (results[songsMatched[j]].preview_url != null) {
        // if not, then log preview_url
        console.log("Preview it here: " + results[songsMatched[j]].preview_url);
      }  else{
        // if empty, then log the following
        console.log("There are no previews for this track.");
      }
    } // end of for loop to write info for the songsMatched
  }); // end of search in spotify
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

  var movie;
  // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
  if (nameOfMovie != null){
    movie = nameOfMovie; // assign the user input to the movie var
  } else {
    movie = "Mr. Nobody";
  }



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
