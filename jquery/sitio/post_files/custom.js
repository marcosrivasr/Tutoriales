$(document).ready(function() {
//Activate First Link
$(".contentnav a:first").addClass("active");
//width of a single content area
var contentwidth = $(".contentholder").width();
//Total number of content
var totalcontent = $(".contenta").size();
//Total width of all content area
var allcontentwidth = contentwidth * totalcontent;
//contentslider to new size which we got in above step
$(".contentslider").css({'width' : allcontentwidth});
//Now right a new function for slide and slide navigation
rotate = function(){
//Number of times we need to slide
var slideid = $active.attr("rel") - 1;
//Set the distance which single content needs to slide
var slidedistance = slideid * contentwidth;
//Remove active class
$(".contentnav a").removeClass('active');
//Add Active Class
$active.addClass('active');
//Slider Animation
$(".contentslider").animate({
        left: -slidedistance
    }, 500 );
}; 
 
//Set Time for Rotation of slide
rotation = function(){
play = setInterval(function(){
//Next slide nav
$active = $('.contentnav a.active').next();
if ( $active.length === 0) {
//Move to first slide nav
$active = $('.contentnav a:first');
}
rotate();
//Timer speed 5 sec
}, 5000);
};
//Run rotation fuction
rotation();
$(".contentnav a").click(function() {
$active = $(this);
clearInterval(play);
rotate();
rotation();
return false;
});
});