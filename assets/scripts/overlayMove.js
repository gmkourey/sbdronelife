// The overlay on the home page above the video is absolute, and therefore doesn't move 
// when the navbar opens on mobile devices

// Get the original header height and get the current top measurement for the overlay on load
let navOriginalSize = $("#header").height();
let topOverlayAlignment = $(".overlay").css("top").slice(0,3);

// Take these measurements everytime the window resizes (i.e. a mobile device is turned)
$(window).resize(function () {
    navOriginalSize = $("#header").height();
    topOverlayAlignment = $(".overlay").css("top").slice(0,3);
})

// On the click of the "hamburger" the function triggers
$(".navbar-toggler").on("click", function () {
    // Have a set timeout so it can measure when the navbar is fully expanded
    setTimeout(function () {
        // Takes difference of the new navbar height and the original height 
        const changeInNavHeight = $("#header").height() - navOriginalSize;
        // Adds the current "top" measurement to the change in navbar height
        const newTop = (parseInt(topOverlayAlignment) + parseInt(changeInNavHeight)) + "px";
        // Applies the new measurement to the overlay so it drops down the same height as the navbar extended
        $(".overlay").css("top", newTop);
    }, 350)
})