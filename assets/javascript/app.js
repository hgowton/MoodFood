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


  var term = "coffee";
  var place = "NYC";
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

  //need to output emotion
  //request parameter of file upload image_file
  var apiKeyFace = "Il2jdGkez5KA4j8vgq3ifaATjB6Wqoh3";
  var faceURL = "https://api-us.faceplusplus.com/facepp/v3/detect/";
  var apiSecretFace = "-e33xUg4LjDI-oEpxDhNVCircjdXMPo2";
  var queryFaceURL = faceURL + apiKeyFace + apiSecretFace
  $.ajax({
    url: queryFaceURL,
    method: "GET"
  }).then(function(responseFace) {
    console.log(responseFace);
  })

  var food = "chicken";  
  var recipeURL = "https://api.edamam.com/search/1cf40488/a1eaff5b1da4a145a0967af7fbfdfd0b/q=" + food;
    // foodAPIid = "1cf40488"
    // foodAPIkey = "a1eaff5b1da4a145a0967af7fbfdfd0b"
    
    $.ajax({
      url: recipeURL,
      method: "GET",
      dataType: "jsonp"
    }).then(function(response) {
      console.log(response)
    }) 
    
    

});