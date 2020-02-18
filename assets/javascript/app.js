$(document).ready(function() {

  var emotionFood = "";
  
  //Yelp API
  var term = "cocktail";
  var place = "19335"; //input box zip code box
  //location -- distance
  var corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
  var queryURL = "https://api.yelp.com/v3/businesses/search?term=" + term + "&location=" + place;
  var apiKey = "wOVQkre9W01lZIZy7IrkwUqyLlBieuCZ623n9TLVFb3m6_DLo4zuOP0rkvFyyZGOjymiYtqqO4F-ej7lTmasoSvP5FrEYKDsun9zhiiLwxqDqtBqFhNWH1pAGfE-XnYx"
  
  //User selects Recipe Button to display recipes based on Mood
  $("#submitUserInfo").on("click", function(event) {
    event.preventDefault();
    var userImageURL = $("#userImage").val().trim();
    var place = $("#userzip-code").val().trim();
    var age = $("#userAge").val().trim();
    console.log("location: " + place)
    console.log("userage: " + age)
    
    //need to output emotion
    //request parameter of file upload image_file
    //switched out exampleURL for userImageURL 
    // var userImageURL = $("#userImage").val().trim();
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
  
  function recipeCall (recipeNumber) {
    var spoonAPI = "&apiKey=181dc4981af649a09212141dc7c2424b"
    var recipeBasics = "https://api.spoonacular.com/recipes/"
    var recipeInfo = "/information?includeNutrition=false"
    var recipeURL = recipeBasics + recipeNumber + recipeInfo + spoonAPI
    console.log(recipeURL)
    $.ajax({
      url: recipeURL,
      method: "GET"
    }).then(function(response) {
      console.log(response)

      var recipeDiv = $("<div class='col s3'>");
      
      var recipeNameGrab = response.title;
      var recipeInfo = $("<div class='col s9'>");
      var recipeSpoonURL = response.sourceUrl
      console.log("recipe URL: " + recipeSpoonURL)

      var cookBook = $("<a target='_blank'>").attr("href", recipeSpoonURL).addClass("linkBtn");
      cookBook.append("<img src='./assets/images/recipe.png' id='recipeImg' alt='cookbook image'>")
      recipeInfo.append(cookBook);

      var recipeName = $("<h5>").text(recipeNameGrab);
      recipeName.addClass("recipeName");
      recipeDiv.append(recipeName)
      console.log("recipe name: ", recipeNameGrab)      
  
      var picGrab = response.image;
      var pic = $("<img>").attr("src", picGrab);
      pic.addClass("picture")
      pic.addClass("responsive-img");
      pic.attr("alt", response.title)
      recipeDiv.append(pic);
      console.log("recipe image URL: " + picGrab)

      var dietType0 = response.diets[0];
      var dietType1 = response.diets[1];
      console.log(dietType1)
      var specialDiets = $("<p>").text("Diet Types: " + dietType0 + ", " + dietType1);
      specialDiets.addClass("diets")
      recipeInfo.append(specialDiets);
     
     
      var row = $("<div class='row suggestedInfo'>").append(recipeDiv, recipeInfo); //+ recipeInfo at some point
      $("#table").prepend(row);

      return response
    })
  }
  
  //User selects Recipe Button to display recipes based on Mood
  //Second spoonacular API call, needed to display information for each recipe
  $("#recipebtn").on("click", function(){
    //IF does not work move line 158 through 207 into here
    //First AJAX call for spoonacular API, necessary to gain recipe ID numbers for second API call
    var spoonAPI = "&apiKey=181dc4981af649a09212141dc7c2424b"
    var spoonStartURL = "https://api.spoonacular.com/recipes/search?number=25&cuisine="
    var spoonCuisine = emotionFood
    var querySpoonURL = spoonStartURL + spoonCuisine + spoonAPI
    console.log(querySpoonURL)
    $.ajax({
      url: querySpoonURL,
      method: "GET"
    }).then(function(response) {
      console.log(response)
      console.log(emotionFood)
      var A = Math.floor(Math.random()*25);
      var B = Math.floor(Math.random()*25);
      var C = Math.floor(Math.random()*25);
      recipeCall(response.results[A].id);
      recipeCall(response.results[B].id);
      recipeCall(response.results[C].id);
    })
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
        pic.addClass("picture")
        pic.addClass("responsive-img");
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



//ways we could possibly make this work based on "mood"
  //1)put in each emotion if statement the onclick restaurant and onclick recipe function
        // just change the for loop number to N (N for Number) and set N to a different number in each if statement 
        // then it will grab from a different parts of the yelp API-outputting different restaurants or different recipes
          //example: if (anger){
            // N=6
            //for (var i=N; i< N+5; i++){
            // (the code that outputs the information)
    //issue: with this one is its pretty DRY--like a lot of repeating that we should probably avoid, even if it is just copy and pasting 

  //2) try and grab the emotion button that has been displayed
        // set each emotion btn equal to a number and input that number into the for loop
          //same concept as the above situation, it'll grab different objects in the array
      //issue: this would solve the DRY issue from above but im not sure if scope would allow us to do this. 

  //3) set the variable 'term' for restaurant API and 'spoonCuisine' for recipe API equal to whatever is the strongest emotion 
    //this would probably follow option 2) in the way that we would try to grab the emotion button that is displayed
    // have the API do a search for the food based on the emotion
    //issue: i'm not sure if typing in an emotion as a key word would mess up the api's but i'm thinking this would probably be the best option ig it works
