let windowHeight = $(window).height();
let bodyHeight = $("body").height();

console.log(windowHeight, bodyHeight);

if(windowHeight >= bodyHeight) {
    $("#footer").css("position", "fixed");
    $("#footer").css("bottom", "0px");
} else {
    $("#footer").css("position", "static");
}

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

