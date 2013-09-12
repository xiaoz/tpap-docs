var DOM = KISSY.DOM;
var Calendar = KISSY.Calendar;//namespace in KISSY


//simple calendar  click input, then calendar popup show.
new Calendar('.simple-calendar', {
    popup: true
});

new Calendar('.mindate-calendar', {
    popup: true,
    minDate: new Date()
});

//only can select the past time
var input = DOM.get('.caninput-calendar');

//dom element supportted too;
var cal = new Calendar(input, {popup: true, maxDate: new Date()});
cal.on('select', function (e) {
    var selectDate = new Date(e.date); //e.date is string here
    input.value = selectDate.getFullYear() + "-" + selectDate.getMonth();
    cal.hide();//hide
});

//test event
cal.on('monthChange',function(e){
    console.log(e.date);
});


//range
new Calendar('.J_Range', {
    pages:2,
    rangeSelect:true,
    popup:false
}).on('rangeSelect', function(e) {
        KISSY.alert(new Date(e.start) + ' ' + new Date(e.end));
});

var showdate = function(n, d) {
    var uom = new Date(d - 0 + n * 86400000);
    uom = uom.getFullYear() + "/" + (uom.getMonth() + 1) + "/" + uom.getDate();
    return new Date(uom);
};


c = new Calendar('.J_MinDateMaxDate', {
    minDate:new Date(),
    maxDate:showdate(10, new Date()),
    popup:false
});