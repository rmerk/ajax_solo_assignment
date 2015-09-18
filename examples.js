
$(document).ready(function() {

    $.ajax('data.json', {
        success: function(response){
            console.log(response);

            for(var it = 0; it < response.length; it++){
              $(".content-placeholder").append("<p>" + response[it].color + " " + response[it].value + "</p>");
            }
        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

})
