var $ = KISSY.all;
$('input').on('keydown mouseup', function (e) {
    $('#log').text(e.type + ': ' + e.which);
});
