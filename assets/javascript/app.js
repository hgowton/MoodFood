$(document).ready(function() {

  //REMOVE -- no longer in use: Allow user to upload a picture
  // window.addEventListener('load', function() {
  //   document.querySelector('input[type="file"]').addEventListener('change', function() {
  //       if (this.files && this.files[0]) {
  //           var img = document.querySelector('img');  // $('img')[0]
  //           img.src = URL.createObjectURL(this.files[0]); // set src to blob url
  //           img.onload = imageIsLoaded;
  //       }
  //   });
  // });
  
  // function imageIsLoaded() { 
  //   console.log(this.src);  // blob url
  // }

  
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
  
  $("#submitUserImage").on("click", function(event) {
    event.preventDefault();
    var userImageURL = $("#userImage").val().trim();
    console.log(userImageURL);
  
    
    //need to output emotion
    //request parameter of file upload image_file
    //switched out exampleURL for userImageURL 
    var userImageURL = $("#userImage").val().trim();
    var faceURL = "https://api-us.faceplusplus.com/facepp/v3/detect?";
    var apiKeyFace = "api_key=Il2jdGkez5KA4j8vgq3ifaATjB6Wqoh3&api_secret=-e33xUg4LjDI-oEpxDhNVCircjdXMPo2";
    var exampleURL = "https://imgix.bustle.com/uploads/getty/2019/12/4/eada5bb4-e0a9-4b91-bbf5-814b50a402ff-getty-1180475233.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70"
    var returnAtt = "&return_attributes=emotion"
    var queryFaceURL = faceURL + apiKeyFace + "&image_url=" + userImageURL + returnAtt 
    $.ajax({
      url: queryFaceURL,
      method: "POST"
    }).then(function(responseFace) {
      console.log(responseFace);
      //variable set to shorten emotion key
      var emotionType = responseFace.faces[0].attributes.emotion
      
      //console log each emotion every person in the 
      console.log("anger: " + emotionType.anger)
      console.log("disgust: " + emotionType.disgust)
      console.log("fear: " + emotionType.fear)
      console.log("happiness: " + emotionType.happiness)
      console.log("sadness: " + emotionType.sadness)
      console.log("surprise: " + emotionType.surprise)
      console.log("neutral: " + emotionType.neutral)
      var anger = emotionType.anger;
      var disgust = emotionType.disgust;
      var fear = emotionType.fear;
      var happiness = emotionType.happiness;
      var sadness = emotionType.sadness;
      var surprise = emotionType.surprise;
      var neutral = emotionType.neutral;

      //displays image that user uploaded as URL
      var displayUserImage = $("<img>")
      displayUserImage.attr("src", userImageURL)
      displayUserImage.attr("alt", "uploaded image from user")
      displayUserImage.addClass("img-fluid");
      $("#userImageDisplay").prepend(displayUserImage)
      
      if (anger > 60){
        //create an image for anger if the anger value from the image is greater than 60
        var angerBtn = $("<img id='angerBtn'>");
        angerBtn.addClass("emotionBtn");
        angerBtn.attr("src", "./assets/images/em_anger.png")
        angerBtn.attr("alt", "anger emoticon")
        
        //appends anger btn to Mood div
        $("#emotionsIcons").prepend(angerBtn) 
      }
      
      if (happiness > 60){
        //create an image for happiness if the anger value from the image is greater than 60
        var happinessBtn = $("<img id='happinessBtn'>");
        happinessBtn.addClass("emotionBtn");
        happinessBtn.attr("src", "./assets/images/em_happy.png")
        happinessBtn.attr("alt", "happy emoticon")
        
        //appends happiness btn to Mood div
        $("#emotionsIcons").prepend(happinessBtn)
      }

      if (disgust > 60){
        //create an image for anger if the disgust value from the image is greater than 60
        var disgustBtn = $("<img id='disgustBtn'>");
        disgustBtn.addClass("emotionBtn");
        disgustBtn.attr("src", "../images/em_disgust.png")
        disgustBtn.attr("alt", "disgust emoticon")
        
        //appends disgust btn to Mood div
        $("#emotionsIcons").prepend(disgustBtn)
      }
      
      if (fear > 60){
        //create an image for happiness if the fear value from the image is greater than 60
        var fearBtn = $("<img id='fearBtn'>");
        fearBtn.addClass("emotionBtn");
        fearBtn.attr("src", "./assets/images/em_fear.png")
        fearBtn.attr("alt", "fear emoticon")
        
        //appends fear btn to Mood div
        $("#emotionsIcons").prepend(fearBtn)
      }

      if (sadness > 60){
        //create an image for sadness if the disgust value from the image is greater than 60
        var sadnessBtn = $("<img id='sadnessBtn'>");
        sadnessBtn.addClass("emotionBtn");
        sadnessBtn.attr("src", "../images/em_disgust.png")
        sadnessBtn.attr("alt", "sadness emoticon")
        
        //appends sadness btn to Mood div
        $("#emotionsIcons").prepend(sadnessBtn)
      }
      
      if (surprise > 60){
        //create an image for happiness if the surprise value from the image is greater than 60
        var surpriseBtn = $("<img id='surpriseBtn'>");
        surpriseBtn.addClass("emotionBtn");
        surpriseBtn.attr("src", "./assets/images/em_surprise.png")
        surpriseBtn.attr("alt", "surprise emoticon")
        
        //appends fear btn to Mood div
        $("#emotionsIcons").prepend(surpriseBtn)
      }

      if (neutral > 60){
        //create an image for neutral if the anger value from the image is greater than 60
        var neutralBtn = $("<img id='neutralBtn'>");
        neutralBtn.addClass("emotionBtn");
        neutralBtn.attr("src", "./assets/images/em_neutral.png")
        neutralBtn.attr("alt", "neutral emoticon")
        
        //appends neutral btn to Mood div
        $("#emotionsIcons").prepend(neutralBtn) 
      }

    
      //clear url input box
      $("#userImage").val("");    
    })

  })
  

  
//spoonacular - for API food and postman
//edamam
var startFood = "https://api.edamam.com/search?q="
var foodType = "chicken"
var foodAPIkey = "&app_key=a1eaff5b1da4a145a0967af7fbfdfd0b"
var foodAPIid = "&app+id=1cf40488"
var queryFoodURL = startFood + foodType + foodAPIid + foodAPIkey
$.ajax({
  url: queryFoodURL,
  method: "GET"
}).then(function(response) {
  console.log(response)
})


    


    

var image = $("#grabtheimageinput")


$("#btn").on("click", function(){ //the submit button
    //will get facial reconitions emotion
    var emotion = response.somethin.something.somthing 
    //based on emotion do a key word search for local businesses
    
    for (var i=0; i<6; i++){
        var restaurantNameGrab = response.businesses[i].name;
        var restaurantName =$("<p>").text(restaurantNameGrab);//<p> tag from table or whatever it is

        var picGrab = response.businesses[i].image_url;
        var pic = $("<img>").append(picGrab);

        var starRatingGrab = response.businesses[i].rating;
        var starRating = $("<p>").text("Rated: ", starRatingGrab);

        var priceGrab = response.businesses[i].price;
        var price = $("<p>").text("Price: ", priceGrab);

        var addressGrabAddress = response.businesses[i].location.display_address[0];
        var addressGrabCity = response.businesses[i].location.display_address[1];
        var address = $("<p>").text("Address: ", addressGrabAddress, addressGrabCity);



        var cocktailGrab = response.businesses[i].alcohol;
        var cocktail = $("<p>").text("Wanna spice it up? ", cocktailGrab);


        var age = $("#ageinput");

        if (age < 21){
            $("#tablerestaurant").append(restaurantName);
            $("#star-rating").append(starRating);
            $("price").append(price);
            $("cocktail").append(cocktail);
            $("#address").append(address)

        }
        else{
            $("#tablerestaurant").append(restaurantName);
            $("#star-rating").append(starRating);
            $("price").append(price);

        }
    }
});




    

});