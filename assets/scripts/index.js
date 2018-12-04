// Check window height and content body height
let windowHeight = $(window).height();
let bodyHeight = $("body").height();

// If window height is bigger than body height then make the header sticky, if not, keep static
if(windowHeight >= bodyHeight) {
    $("#footer").css("position", "fixed");
    $("#footer").css("bottom", "0px");
} else {
    $("#footer").css("position", "static");
}

// Take new measurements and do the above function every time the window is resized (i.e. mobile device flipped)
$(window).resize(function () {
    windowHeight = $(window).height();
    bodyHeight = $("body").height();

    if(windowHeight >= bodyHeight) {
        $("#footer").css("position", "fixed");
        $("#footer").css("bottom", "0px");
    } else {
        $("#footer").css("position", "static");
    }
})

