# liri-node-app

### What this does:

This project queries various APIs such as Twitter, Spotify, and OMDB, based on the user's command and search terms.

The commands are as such...

* my-tweets
* spotify-this-song
* movie-this
* do-what-it-says

##### my-tweets

With this command, it will query the user's twitter account and return the last twenty tweets and the time and date it was originally sent.

##### spotify-this-song

Followed by the name of the song.  The query will then return a limit of 20 songs that contain the search term(s).  Since, I want the result to exactly match the search term (i.e. if the search is "One", the query may return "One Way" as well), I looped through the 20 songs and returned only the ones tha match exactly and then logging the artist, the title, the name of the album and the link to preview the song.

##### movie-this

Followed by the name of the movie.  This request to OMDB will return the body which is then parsed using JSON.parse(body).  From that parsed data, I was able to find the locations of the properties and logged the name of the movie, the year it was released, the IMDB and Rotten Tomatoes ratings, as well as the country it was filmed in and the language it's in.  The plot, the actors and the director are also logged.

##### do-what-it-says

This command will tell the program to read a .txt file and then take that random command to then run that command.  
