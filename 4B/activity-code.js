//e.g. var url = "https://www.omdbapi.com/?apikey=[key]"; 
// You'll need to replace the [key] part with your own API key 
var url; // = REST endpoint with query parameters 

var movieId = "i=tt3896198"; 
var requestMovie = new XMLHttpRequest();

// Step 1. Inspect requestMovie object

requestMovie.open('GET', url + "&" + movieId);

// Step 2. Inspect requestMovie object

requestMovie.send();

// Step 3. Inspect requestMovie object


// Step 4. To actually access the values from the JSON that's returned: 

var response = requestMovie.response; 

var responseData = JSON.parse(response); 