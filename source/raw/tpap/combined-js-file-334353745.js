function log(info){
    var DOM = KISSY.DOM;
    var lr = DOM.get('.logresult');
    if(!lr){
        var newdiv = document.createElement("div");
        newdiv.className = "logresult";
        KISSY.DOM.get('div').appendChild(newdiv);
        lr = DOM.get('.logresult');
        lr.innerHTML = "<h3 style='padding-left:5px;'>LOG HERE</h3>";
    }
    lr.innerHTML = lr.innerHTML + "<p>"+info+"</p><br/>";
    KISSY.log(lr.innerHTML);
}
log("log working!");;
var DOM = KISSY.DOM;
var KCharts = KISSY.KCharts;//namespace in KISSY

var LineChart = KCharts.LineChart;
var BarChart = KCharts.BarChart;
var PieChart = KCharts.PieChart;

var linechart = new LineChart({
    renderTo: ".linechart",
    title: {
        content: "week cosume:"
    },
    anim: {},
    subTitle: {
        content: "week fee record"
    },
    xAxis: {
        text: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'FRI', 'SAT', 'SUN']
    },
    yAxis: {
        min: 0
    },
    series: [
        {
            data: [100, 400, 200, 400, 144, 234, 700]
        }
    ],
    tip: {
        template: "total£º<span>{{y}}</span> yuan<br/>"
    }
});

linechart.on('afterRender', function () {
    log('after Render Callback');
});

var barChart = new BarChart({
    renderTo: ".barchart",
    yLabels: {
        css: {
            "marginLeft": "-4px",
            "font-family": "Microsoft Yahei",
            "font-size": "10px"
        }
    },
    xLabels: {
        css: {
            "font-family": "Microsoft Yahei",
            "font-size": "10px"
        }
    },
    title: {
        content: "Monthly Average Temperature"
    },
    anim: {},
    subTitle: {
        content: "Source: WorldClimate.com"
    },
    lineType: "arc",
    xAxis: {
        text: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        num: 7
    },
    comparable: true,
    series: [
        {
            text: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        },
        {
            text: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }
        ,
        {
            text: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        },
        {
            text: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }
    ],
    legend: {
        isShow: true, y: -10
    },
    tip: {
        offset: {
            x: 10,
            y: 10
        }
    }
});
barChart.on('barChange', function () {
    log('user is switch barchart!');
})

var piechart = new PieChart({
    "data": [
        {"label": "Chrome", "data": 1},
        {"label": "FireFox", "data": 2},
        {"label": "IE", "data": 3},
        {"label": "Opera", "data": 4},
        {"label": "Safari", "data": 5}
    ],
    "renderTo": ".piechart",
    "rpadding": 80,
    "anim": {"easing": "swing", "duration": 5000}
});
log("duration anim 5s");
