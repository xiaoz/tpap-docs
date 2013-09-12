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
log("log working!");