$('h1').css('color','pink');
$('body').css('background-color','grey');
$('#everything').css('font-size','120%');
$('.holder').css('border','2px solid black');
$('li').css('font-weight','bold');
$('h1+p').css('color','blue');
$('#secret').css('display','none');
$('#change-me').text('');
$('#change-me').html('<p></p>');
// inlined
$("#change-me").css({
    "width": "80%",
    "margin-left": "auto",
    "margin-right": "auto"
});

// separated
var options = {
    "width": "80%",
    "margin-left": "auto",
    "margin-right": "auto"
};

$("#change-me").css( options );
// inlined
$("#change-me").animate({
    "font-size": "300%",
    "margin-left": "200px",
    "padding": "50px"
});

// separated
var options = {
    "font-size": "300%",
    "margin-left": "200px",
    "padding": "50px"
};

$("#change-me").animate( options );
