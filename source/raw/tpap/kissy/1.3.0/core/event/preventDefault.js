var $ = KISSY.all;
$("a").on('click', function (event) {
    event.preventDefault();
    $('#log').text('default ' + event.type + ' prevented');
});
