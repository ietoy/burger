$(function() {
    $(".devour-it").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id);

        var nowDevoured = {
            devoured: true
        };
        console.log(nowDevoured);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nowDevoured
        }).then(function() {
            console.log("You devoured it!");
            location.reload();

        })

    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
        };

        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger.burger_name
        }).then(
            function() {
                console.log("Added a new burger!");
                location.reload()
            }
        )

    })
})