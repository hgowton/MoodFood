$(document).ready(function() {

  //Allow user to upload a picture
  window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img.onload = imageIsLoaded;
        }
    });
  });
  
  function imageIsLoaded() { 
    console.log(this.src);  // blob url
  }

//Yelp API
  var term = "cocktail";
  var place = "19335"; //input box zip code box
  //location -- distance
  var corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
  var queryURL = "https://api.yelp.com/v3/businesses/search?term=" + term + "&location=" + place;
  var apiKey = "wOVQkre9W01lZIZy7IrkwUqyLlBieuCZ623n9TLVFb3m6_DLo4zuOP0rkvFyyZGOjymiYtqqO4F-ej7lTmasoSvP5FrEYKDsun9zhiiLwxqDqtBqFhNWH1pAGfE-XnYx"

  $.ajax({
    url: corsAnywhereUrl + queryURL,
    method: "GET",
    headers: {
      "Authorization" : "Bearer " + apiKey
    }
  }).then(function(response) {
    console.log(response);
  }); 


  // $.ajax({
  //   url: 'https://api-us.faceplusplus.com/facepp/v3/detect?api_key=Il2jdGkez5KA4j8vgq3ifaATjB6Wqoh3&api_secret=-e33xUg4LjDI-oEpxDhNVCircjdXMPo2&image_url=https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mark_Twain_by_AF_Bradley.jpg/330px-Mark_Twain_by_AF_Bradley.jpg&return_attributes=emotion',
  //   method: "POST"
  // }).then(function(response) {
  //     console.log(response);
  //   });




  //need to output emotion
  //request parameter of file upload image_file
  var faceURL = "https://api-us.faceplusplus.com/facepp/v3/detect?";
  var apiKeyFace = "api_key=Il2jdGkez5KA4j8vgq3ifaATjB6Wqoh3&api_secret=-e33xUg4LjDI-oEpxDhNVCircjdXMPo2";
  var exampleURL = "https://imgix.bustle.com/uploads/getty/2019/12/4/eada5bb4-e0a9-4b91-bbf5-814b50a402ff-getty-1180475233.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70"
  var returnAtt = "&return_attributes=emotion"
  var queryFaceURL = faceURL + apiKeyFace + "&image_url=" + exampleURL + returnAtt 
  $.ajax({
    url: queryFaceURL,
    method: "POST"
  }).then(function(responseFace) {
    console.log(responseFace);
    console.log("anger: " + responseFace.faces[0].attributes.emotion.anger)
    console.log("disgust: " + responseFace.faces[0].attributes.emotion.disgust)
    console.log("fear: " + responseFace.faces[0].attributes.emotion.fear)
    console.log("happiness: " + responseFace.faces[0].attributes.emotion.happiness)
    console.log("sadness: " + responseFace.faces[0].attributes.emotion.sadness)
    console.log("surprise: " + responseFace.faces[0].attributes.emotion.surprise)

  })
  

  
//spoonacular - for API food and postman

  // var food = "chicken";  
  // var recipeURL = "https://api.edamam.com/search/1cf40488/a1eaff5b1da4a145a0967af7fbfdfd0b/q=" + food;
    // foodAPIid = "1cf40488"
    // foodAPIkey = "a1eaff5b1da4a145a0967af7fbfdfd0b"
    
    // $.ajax({
    //   url: recipeURL,
    //   method: "GET",
    //   dataType: "jsonp"
    // }).then(function(response) {
    //   console.log(response)
    // }) 
    
    

});