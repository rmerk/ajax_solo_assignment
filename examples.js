
$(document).ready(function() {

    $.ajax('data.json', {
        success: function(response){
            console.log(response);
            $(function () {
              // Grab the template script
              var theTemplateScript = $("#entry-template").html();

              // Compile the template
              var theTemplate = Handlebars.compile(theTemplateScript);

              // Pass our data to the template
              var theCompiledHtml = theTemplate(response);

              // Add the compiled html to the page
              $('body').html(theCompiledHtml);
            });//end function()

            //This was for appending to the DOM
            // for(var it = 0; it < response.length; it++){
            //   $(".content-placeholder").append("<p>" + response[it].color + " " + response[it].value + "</p>");
            // }
        },//end success
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });//end ajax




})//end ready
