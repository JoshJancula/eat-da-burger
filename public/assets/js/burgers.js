// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newState = $(this).data("newstate");

    var newBurgerState = {
      devoured: !newState
    };
alert("id= " + id + " newState: " + newState);
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
      burger: $("#ca").val().trim(), // it has not been eaten yet
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
