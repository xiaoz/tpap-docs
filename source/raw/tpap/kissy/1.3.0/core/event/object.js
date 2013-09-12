
var $ = KISSY.all;
$('.container').on('mousemove', function (e) {
    console.log(e.relatedTarget);
    $(".log").text("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY);
});
$('.log').on('mouseout', function (e) {
    console.log(e.relatedTarget.nodeName);

});
