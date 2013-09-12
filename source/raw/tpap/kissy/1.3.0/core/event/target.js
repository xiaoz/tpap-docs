var $ = KISSY.all;
$(".container").on('click', function (event) {
    $("#log").text("clicked: " + event.target.nodeName);
});
