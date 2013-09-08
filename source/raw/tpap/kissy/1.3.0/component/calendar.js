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
