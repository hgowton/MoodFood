$(document).ready(function() {

  var emotionFood = "";
  var place = "19335"; //will be replaced by input box zip code box

  //User selects Recipe Button to display recipes based on Mood
  $("#submitUserInfo").on("click", function(event) {
    event.preventDefault();
    var userImageURL = $("#userImage").val().trim();
    var place = $("#userzip-code").val().trim();
    var age = $("#userAge").val().trim();
    console.log("location: " + place)
    console.log("userage: " + age)
    
    //Face++ API Call 
    var faceURL = "https://api-us.faceplusplus.com/facepp/v3/detect?";
    var apiKeyFace = "api_key=Il2jdGkez5KA4j8vgq3ifaATjB6Wqoh3&api_secret=-e33xUg4LjDI-oEpxDhNVCircjdXMPo2";
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
      // console.log("anger: " + emotionType.anger)
      // console.log("disgust: " + emotionType.disgust)
      // console.log("fear: " + emotionType.fear)
      // console.log("happiness: " + emotionType.happiness)
      // console.log("sadness: " + emotionType.sadness)
      // console.log("surprise: " + emotionType.surprise)
      // console.log("neutral: " + emotionType.neutral)
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
        emotionFood = "salty&dessert&comfort"
        
        //appends anger btn to Mood div
        $("#emotionsIcons").prepend(angerBtn) 
      }
      
      if (happiness > 60){
        //create an image for happiness if the happiness value from the image is greater than 60
        var happinessBtn = $("<img id='happinessBtn'>");
        happinessBtn.addClass("emotionBtn");
        happinessBtn.attr("src", "./assets/images/em_happy.png")
        happinessBtn.attr("alt", "happy emoticon")
        emotionFood = "exotic&dessert"
        
        //appends happiness btn to Mood div
        $("#emotionsIcons").prepend(happinessBtn)
      }
      
      if (disgust > 60){
        //create an image for disgust if the disgust value from the image is greater than 60
        var disgustBtn = $("<img id='disgustBtn'>");
        disgustBtn.addClass("emotionBtn");
        disgustBtn.attr("src", "./assets/images/em_disgust.png")
        disgustBtn.attr("alt", "disgust emoticon")
        emotionFood = "american&salty"
        
        //appends disgust btn to Mood div
        $("#emotionsIcons").prepend(disgustBtn)
      }
      
      if (fear > 60){
        //create an image for happiness if the fear value from the image is greater than 60
        var fearBtn = $("<img id='fearBtn'>");
        fearBtn.addClass("emotionBtn");
        fearBtn.attr("src", "./assets/images/em_fear.png")
        fearBtn.attr("alt", "fear emoticon")
        emotionFood = "italian"
        
        //appends fear btn to Mood div
        $("#emotionsIcons").prepend(fearBtn)
      }
      
      if (sadness > 60){
        //create an image for sadness if the disgust value from the image is greater than 60
        var sadnessBtn = $("<img id='sadnessBtn'>");
        sadnessBtn.addClass("emotionBtn");
        sadnessBtn.attr("src", "./assets/images/em_sadness.png")
        sadnessBtn.attr("alt", "sadness emoticon")
        emotionFood = "comfort food"
        
        //appends sadness btn to Mood div
        $("#emotionsIcons").prepend(sadnessBtn)
      }
      
      if (surprise > 60){
        //create an image for happiness if the surprise value from the image is greater than 60
        var surpriseBtn = $("<img id='surpriseBtn'>");
        surpriseBtn.addClass("emotionBtn");
        surpriseBtn.attr("src", "./assets/images/em_surprise.png")
        surpriseBtn.attr("alt", "surprise emoticon")
        emotionFood = "chinese"
        
        //appends fear btn to Mood div
        $("#emotionsIcons").prepend(surpriseBtn)
      }
      
      if (neutral > 60){
        //create an image for neutral if the neutral value from the image is greater than 60
        var neutralBtn = $("<img id='neutralBtn'>");
        neutralBtn.addClass("emotionBtn");
        neutralBtn.attr("src", "./assets/images/em_neutral.png")
        neutralBtn.attr("alt", "neutral emoticon")
        emotionFood = "spicy"
        
        //appends neutral btn to Mood div
        $("#emotionsIcons").prepend(neutralBtn) 
      }
      
      var emotion = $("#emotionsIcon")
      console.log("emotion", emotion)
      console.log("emotion food:" + emotionFood);
      
      //clear url input box
      $("#userImage").val("");
      $("#emot_rrcArea").removeClass("displayNone");  
      if (age > 20) {
        $("#cocktailBtn").removeClass("displayNone");
      }  
    })  
  })


  function recipeCall2 () {
  // recipe query url FIX
  var edamamQuery = "https://api.edamam.com/search?q=" + 
  emotionFood + "&app_id=1cf40488&app_key=a1eaff5b1da4a145a0967af7fbfdfd0b";

  // page randomizer
  var r = Math.floor(Math.random() * 20 + 1);

          
   // EDAMAM recipe API call
   $.ajax({
    url: edamamQuery,
    method: "GET",
  }).then(function(response) {
    
    var recipes = response.hits

    //generates random number to show different recipes
    var R = Math.floor(Math.random()*6);
    for (var i=R; i<R+3; i++){
      var recipeDiv = $("<div class='col s3'>").append(
        $("<img>").attr("src", recipes[i].recipe.image).addClass("picture responsive-img").attr("alt", recipes[i].recipe.label)
      );

      var recipeInfo = $("<div class='col s9'>").append(
        //add cookbook image linked to recipe's website
        $("<a target='_blank'>").attr("href", recipes[i].recipe.url).addClass("linkBtn").append("<img src='./assets/images/recipe.png' id='recipeImg' alt='cookbook image'>"),
        //add name of recipe
        $("<h5>").text(recipes[i].recipe.label).addClass("recipeName"),
        $("<p>").text("Yields: " + recipes[i].recipe.yield).addClass("info"),
        $("<p>").text("Health Labels: ").addClass("health info")
      )

      if (recipes[i].recipe.healthLabels.length === 0) {
        $(".health").append("This recipe has no special health labels");
      } else {
        var diets = $("<ul>")
        var health = recipes[i].recipe.healthLabels
        for (j=0; j< health.length; j++) {
          var healthLab = $("<li>").text("  • " + health[j]);
          diets.append(healthLab)
        }
        recipeInfo.append(diets);
      }

      var ingredientList = $("<p>").text("Ingredients: ").addClass("info");
      recipeInfo.append(ingredientList)

      var list = $("<ul>");
      var ingredients = recipes[i].recipe.ingredientLines;
      for (k=0; k<ingredients.length; k++) {
        var item = $("<li>").text("  • " + ingredients[k]);
        list.append(item);
      }
      recipeInfo.append(list)




      var row = $("<div class='row suggestedInfo'>").append(recipeDiv, recipeInfo); 
      $("#table").prepend(row);
    }
  });
};

  
  //User selects Recipe Button to display recipes based on Mood
  //Second spoonacular API call, needed to display information for each recipe
  $("#recipebtn").on("click", function(){
    recipeCall2();
  })
  
  function rrCall (response){
    var N = Math.floor(Math.random()*16);
    for (var i=N; i< N+3; i++){
        var restaurantDiv = $("<div class='col s3'>");
        restCall = response.businesses[i]
        
        var restaurantNameGrab = restCall.name;
        var restaurantName =$("<h5>").text(restaurantNameGrab);
        restaurantName.addClass("restaurantName");
        restaurantDiv.append(restaurantName)
        
        var picGrab = restCall.image_url;
        var pic = $("<img>").attr("src", picGrab);
        pic.addClass("picture responsive-img")
        pic.attr("alt","restaurant image")
        restaurantDiv.append(pic);
        
        var restaurantInfo = $("<div class='col s9'>");

        var restURL = restCall.url
        console.log("recipe URL: " + restURL)
  
        var restaurantWebsite = $("<a target='_blank'>").attr("href", restURL).addClass("linkBtn");
        restaurantWebsite.append("<img src='./assets/images/restaurant.png' id='restaurantImg' alt='restaurant website image'>")
        restaurantInfo.append(restaurantWebsite);
        
        var starRatingGrab = restCall.rating;
        var starRating = $("<h6>").text("Rated out of 5 stars: " + starRatingGrab);
        starRating.addClass("rating")
        restaurantInfo.append(starRating);
        
        var priceGrab = restCall.price;
        var price = $("<p>").text("Price: " + priceGrab);
        price.addClass("price")
        restaurantInfo.append(price);
        
        var addressGrabAddress = restCall.location.display_address[0];
        var addressGrabCity = restCall.location.display_address[1];
        var address = $("<p>").text("Address: " + addressGrabAddress + " " 
        + addressGrabCity);
        address.addClass("address")
        restaurantInfo.append(address);

        var phoneGrab = restCall.display_phone;
        var phone = $("<p>").text("phone: " + phoneGrab);
        phone.addClass("phone")
        restaurantInfo.append(phone);
        
        var row = $("<div class='row suggestedInfo'>").append(restaurantDiv, restaurantInfo);
        $("#table").prepend(row);
      }
    } 

  //User selects Restaurant Button to display Restaurant selections based on Mood
  $("#restaurantBtn").on("click", function(){
    //Yelp API
    var searchEmotion = emotionFood;
    var term = "restaurant"
    console.log("zip code: ", place)
    console.log("emotion of food: " + emotionFood)
    var corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
    var queryURL = "https://api.yelp.com/v3/businesses/search?term=" + term + "&" + searchEmotion + "&location=" + place;
    var apiKey = "wOVQkre9W01lZIZy7IrkwUqyLlBieuCZ623n9TLVFb3m6_DLo4zuOP0rkvFyyZGOjymiYtqqO4F-ej7lTmasoSvP5FrEYKDsun9zhiiLwxqDqtBqFhNWH1pAGfE-XnYx"
    
    $.ajax({
      url: corsAnywhereUrl + queryURL,
      method: "GET",
      headers: {
        "Authorization" : "Bearer " + apiKey
      }
    }).then(function(response) {
      console.log("this is response", response);
      rrCall(response);
    });
  }); 

  //User selects Coctail Button to display Cocktail selections based on Mood
  $("#cocktailBtn").on("click", function(){
    //Yelp API
    var term = "cocktail";
    var searchEmotion = emotionFood;
    console.log("zip code: ", place)
    var corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
    var queryURL = "https://api.yelp.com/v3/businesses/search?term=" + term + "&" + searchEmotion + "&location=" + place;
    var apiKey = "wOVQkre9W01lZIZy7IrkwUqyLlBieuCZ623n9TLVFb3m6_DLo4zuOP0rkvFyyZGOjymiYtqqO4F-ej7lTmasoSvP5FrEYKDsun9zhiiLwxqDqtBqFhNWH1pAGfE-XnYx"
    
    $.ajax({
      url: corsAnywhereUrl + queryURL,
      method: "GET",
      headers: {
        "Authorization" : "Bearer " + apiKey
      }
    }).then(function(response) {
      console.log("this is response", response);
      rrCall(response);
    });
  });
}); 

