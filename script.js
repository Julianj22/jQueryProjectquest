
var x = "#yes";

var y = "#no";

var z = "#give_me";

var b = "#begone";

$("#one").click(function() {
 $("#awakening").show();
    $("#house").hide();
    $("#two").show();
    $("#one").hide();
});

$("#two").dblclick(function() {
    $("#awakening").fadeOut(4000);
    $("#john").delay(5000).fadeIn(4000);
    $("#two").fadeOut(4000);
    $("#gm").delay(5000).fadeIn(4000);
    $("#ch").delay(6000).fadeIn(5000);
    $("#d").delay(8000).fadeIn(6000);
    $(".glyph").delay(8500).fadeIn(7000);
    
});



// $(x).click(function() {
//     $(x).slideUp(2500);
//     $(y).css("border","5px  solid red");
// });



$(y).hover(function() {
    $(x).slideUp(2500);
    $(y).text("Just take the Lasagna Garfield");
    $(y).css("color","red");
    $(y).css("border","3px solid red");
    $(y).delay(5000).fadeOut();


    $("#john").fadeOut(4000);
    $("#gm").fadeOut(4000);
    $("#ch").fadeOut(5000);
    $("#d").fadeOut(6000);
    $("#parents").delay(5000).fadeIn(4000);
    $("#gm2").delay(6000).fadeIn(4000);
    $("#gm3").delay(7000).fadeIn(4000);
    $(z).delay(8000).fadeIn(4000);
});

$(z).click(function() {
     $("#parents").fadeout(4000);
    $("#gm2").fadeOut(4000);
    $("#gm3").fadeOut(4000);
    $("#las").show();
});

