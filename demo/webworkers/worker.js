// worker.js
onmessage = function(event){
    if(typeof event.data == "string")
        postMessage("Hello from worker, " + event.data + "!");
    else
        someLoop();
};

function someLoop() {
    var worker2 = new Worker("worker2.js");
    worker2.onmessage = function(event) {
        for (var x = 1; x <= event.data; ++x);
        postMessage('Цикл закончен');
    }
    worker2.postMessage("");
}