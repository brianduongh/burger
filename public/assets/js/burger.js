// Wait for DOM to load
  $(() => {
    $(".create-form").on("submit", (event) => {
      // Prevents page from reloading
      event.preventDefault();

      const newBurger = {
        name: $("#burger").val().trim()
      };
      // Send post request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        () => {
          // Reloads page with updated list
          location.reload();
        }
      );
    });

    $(".devour-burger").on("click", function(event) {
      const id = ($(this).context.dataset.id);

      $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(
        () => {
          location.reload();
        }
      )
    });
  });
