let navOriginalSize = $("#header").height();
let topOverlayAlignment = $(".overlay").css("top").slice(0,3);

$(window).resize(function () {
    navOriginalSize = $("#header").height();
    topOverlayAlignment = $(".overlay").css("top").slice(0,3);
})

$(".navbar-toggler").on("click", function () {
    setTimeout(function () {
        const changeInNavHeight = $("#header").height() - navOriginalSize;
        const newTop = (parseInt(topOverlayAlignment) + parseInt(changeInNavHeight)) + "px";
        $(".overlay").css("top", newTop);
    }, 350)
})