
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

$("#awakening").dblclick(function() {
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
    $("#ch").fadeOut(4000);
    $("#d").fadeOut(4000);
    $("#parents").delay(5000).fadeIn(4000);
    $("#gm2").delay(6000).fadeIn(4000);
    $("#gm3").delay(7000).fadeIn(4000);
    $(".glyph2").delay(8000).fadeIn(4000);
});

$(z).click(function() {
     $("#mom").fadeOut();
    $(z).hide();
    $(b).hide();
    $("#las").show();
    $("#tm").delay(2000).show();
});

$(b).click(function() {
    $("#mom").fadeOut();
     $(z).hide();
    $(b).hide();
    $("#md1").fadeIn();
    $("#md2").fadeIn();
    $("#md3").fadeIn();
    $("#md4").fadeIn();
    $("#quest").delay(10000).fadeOut(3000);
    $("#reload").delay(18000).fadeIn();
    $("#reload").css("margin-top","0");
     $("#reload").css("margin-bottom","0");
     $("#reload").css("margin-right","auto");
     $("#reload").css("margin-left","auto");
});


$("#reload").click(function() {
    location.reload();
});

