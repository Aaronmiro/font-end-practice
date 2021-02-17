$("input[type = 'text']").keypress(function (e) {
    if (e.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});

$("ul").on("click", "li", function (e) {
    $(this).toggleClass("completed");
});

$("h1").on("click", "i", function (e) {
    $(this).toggleClass("fa-plus");
    $("input[type = 'text']").fadeToggle(300);
    $(this).toggleClass("fa-minus");
});

$("ul").on("click", "span", function (e) {
    $(this).parent().slideUp(400, function () {
        $(this).remove();
    });
    e.stopPropagation();
});