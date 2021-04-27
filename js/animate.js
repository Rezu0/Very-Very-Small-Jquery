$(document).ready(function(){
    $("#clickthis").click(function() {
        $("#contenthis").slideToggle(function(){
            if ($("#contenthis").is(':visible')) {
                $("#clickthis").text("Hide pls!")
            }else{
                $("#clickthis").text("Show pls!");
            }
        });
    });

    var click   = 0;
    $("#addthis").click(function(){
        click++;
            if (click <= 1) {
                var Text    = "<label class='my-2'>Type whatever you want</label><input type='text' id='textlorem' autocomplete='off' placeholder='Type in Here...'>"
                $(Text).appendTo("form").fadeIn(1000);
                $("#printhere").appendTo("form").fadeIn(1200);
                $("#addthis").fadeOut(500);
            }
        $("form").submit(function(){
            $("#lorem").each(function(){
                var textuwu     = $(this).text();
                    if ($("#textlorem").val() == 0) {
                        $("#warning").text("Please Type your text!").fadeIn();
                    }else{
                        $(this).text(textuwu.replace(textuwu, $("#textlorem").val()));
                        $("#warning").fadeOut(800);
                    }
            });
            event.preventDefault();
        });
    });

});