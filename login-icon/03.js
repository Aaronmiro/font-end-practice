$(".login").click(function (e) { 
    $(this).toggleClass("active");
    setTimeout(() => {
        $(".divs").toggleClass("loading");
        $("span").toggleClass("checkMark");
    }, 2000);
});