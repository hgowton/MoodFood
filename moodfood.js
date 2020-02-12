// var image = $("<img>");

// image.addClass("user-image");

// image.attr("src", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.scribd.com%2Fupload-document&psig=AOvVaw303OYeHbnzwtu0FVR7lO9p&ust=1581459779872000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiYhPqCyOcCFQAAAAAdAAAAABAD")

// html 
/* <form action="myform.cgi">
<input type="file" name="fileupload" value="fileupload" id="fileupload">
<label for="fileupload"> Select a file to upload</label>
<br><input type="image" src="/wp-content/uploads/sendform.png" alt="Submit" width="100">
</form> */






var image = $("#grabtheimageinput")


$("#btn").on("click", function(){ //the submit button
    //will get facial reconitions emotion
    var emotion = response.somethin.something.somthing 
    //based on emotion do a key word search for local businesses
    
    for (var i=0; i<6; i++){
        var restaurantNameGrab = response.data[i].name;
        var restaurantName =$("<p>").text(restaurantNameGrab);//<p> tag from table or whatever it is

        var picGrab = response.data[i].img;
        var pic = $("<p>").text(picGrab);

        var starRatingGrab = response.data[i].starRating;
        var starRating = $("<p>").text("Rated: ", starRatingGrab);

        var descriptionGrab = response.data[i].description;
        var description = $("<p>").text("Overveiw: ", descriptionGrab);

        var cocktailGrab = response.data[i].alcohol;
        var cocktail = $("<p>").text("wanna spice it up? ", cocktailGrab);


        var age = $("#ageinput");

        if (age < 21){
            $("#tablerestaurant").append(restaurantName);
            $("#star-rating").append(starRating);
            $("description").append(description);
            $("cocktail").append(cocktail);

        }
        else{
            $("#tablerestaurant").append(restaurantName);
            $("#star-rating").append(starRating);
            $("description").append(description);

        }
    }
});



