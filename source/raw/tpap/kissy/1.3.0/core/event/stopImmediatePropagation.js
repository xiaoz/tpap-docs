var $ = KISSY.all;
$("p").on('click', function (event) {
    event.stopImmediatePropagation();
});
$("p").on('click', function (event) {
    // This function won't be executed
    $(event.target).text("我被点击了");
});
$("div").on('click', function (event) {
    // This function will be executed
    $(event.target).text("我被点击了");
});
