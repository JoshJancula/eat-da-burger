// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() { // when we click on the eat me button
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id"); // get the id of the burger
    var newState = $(this).data("newstate"); // what is the state of the burger?

    var newBurgerState = { // not anymore!
      devoured: !newState
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() { // we have eaten the burger
        console.log("burger has been devoured", newState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  // when you submit a new burger
  $(".create-form").on("submit", function(event) {
   
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // new burger
    var newBurger = {
      burger: $("#ca").val().trim(), 
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() { // tell me it worked
        console.log("created a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});