var $ = KISSY.all;

function handler(event) {
    var $target = $(event.target);
    if ($target.test("li")) {
        $target.children().toggle();
    }
}

$("ul").on('click', handler).all("ul").hide();
