$(function(){
    $(".change-eaten").on("click", function (event) {
        let id = $(this).data("id");
        let devoured = $(this).data("true");

        var newDevouredState = {
            devoured: devoured
        };
        $.ajax("/burgers/" + id,{
            type: "PUT",
            data: newDevouredState
        }).then( function(){
            console.log("changed devoured state to " + devoured);
            location.reload();
        
        });
    });

    $(".burgerForm").on("click", function(){
        event.preventDefault();

        let newBurg ={
            burger_name: $("burger").val().trim(),
            devoured: false
        };

        $.ajax("/burgers",{
            type:"POST",
            data: newBurg
        }).then( function(){
            console.log("created new burger");
            location.reload();
        });
        
    });
});