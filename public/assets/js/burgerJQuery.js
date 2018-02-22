$(function(){
    $(".change-eaten").on("click", function () {
       
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

    $("#submit").on("click", function(event){
        event.preventDefault();

        let newBurg ={
            burger_name: $("#burgerType").val().trim(),
            devoured: false
        };
        console.log(newBurg);

        $.ajax("/burgers",{
            type:"POST",
            data: newBurg
        }).then( function(){
            console.log("created new burger");
            location.reload();
        });
        
    });
});