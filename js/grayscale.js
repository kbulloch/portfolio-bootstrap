/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Scale portfolio image overlay text
$(document).ready(function() {
    var fontSize = parseInt($(".img-portfolio").height()*0.15)+"px";
    $(".img-overlay-txt").css("font-size", fontSize);
});

// Reveal more portfolio items
$("#more-items-btn").click(function() {
    $(".portfolio-item-hidden").removeClass("hidden");
    $("#more-items-btn").addClass("hidden");
    $("#fewer-items-btn").removeClass("hidden");
});

// Hide extra portfolio items
$("#fewer-items-btn").click(function() {
    $(".portfolio-item-hidden").addClass("hidden");
    $("#more-items-btn").removeClass("hidden");
    $("#fewer-items-btn").addClass("hidden");
});
