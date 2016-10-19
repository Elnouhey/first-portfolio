/*global document, window, alert, console, require*/

var showText = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}
$(function () {

    showText(".goal", "As my Great grandfathers built Great Pyramids, I'm building Great Websites", 0, 100);

});


$(document).ready(function(){
    $('.carousel').carousel({
        interval:6000
    });
    
    $('.banner .cat').click(function () {

        $('html, body').animate({

            scrollTop: $('.about-me').offset().top

        }, 700);
    });
    
   
});

