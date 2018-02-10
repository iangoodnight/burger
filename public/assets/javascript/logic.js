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


});