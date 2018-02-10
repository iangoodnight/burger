$(document).ready(function() {
    console.log( "ready!" );

    // eat button
    $(".eat-it").on("click"), function(event) {
    	event.preventDefault();
    	var id = $(this).data("id");
    	console.log("Attempting to eat " + this.burger_name);

    	var newDevourState = {
    		devoured: true
    	};

    	$.ajax("/api/burgers/" + id, {
    		type: "PUT",
    		data: newDevourState
    	}).then(function() {
    		console.log("Successfully eaten " + this.burger_name);
    		location.reload();
    	})
    }

	$(".create-form").on("submit", function(event) {
	    // Make sure to preventDefault on a submit event.
	    event.preventDefault();
	    var newBurger = {
	       	burger_name: $("#burger").val().trim()
	                
	        };
			console.log("added: " + newBurger)
	        // Send the POST request.
	        $.ajax("/api/burger", {
	            type: "POST",
	            data: newBurger
	        }).then(
	            function() {
	                console.log("created new burger");
	                // Reload the page to get the updated list
	                location.reload();
	            }
	        );
	    });


});