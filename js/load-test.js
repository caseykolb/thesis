// load-test.js

$(document).ready(function() {
    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on("complete", handleComplete, this);
    queue.loadManifest([{id:"big1", src:"audio/big-files/smalltown.aiff"},
                        {id:"big2", src:"audio/big-files/freeze1.aif"},
                        //{id:"big3", src:"audio/big-files/freeze2.aif"},
                        //{id:"big4", src:"audio/big-files/freeze3.aif"},
                       ]);
    
    function handleComplete() {
        alert("All of the audio files have been preloaded");
        createjs.Sound.play("big1");
    }
});

