onmessage = function(w){
    var n = parseInt(w.data);
    var send = Math.round(n/100);
    for (var i = 0; i < n; i++){
        if(i%send == 0) {
            postMessage(i);
        }
    }
    postMessage(n);
};