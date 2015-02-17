var audioPath = "audio/vocal-drag/";
var stage = new createjs.Stage("canvas");

var firstVocalBall, secondVocalBall, thirdVocalBall, fourthVocalBall;


$(document).ready (function () {
    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on("complete", handleComplete, this);
    queue.loadManifest([{id:"bow_1", src:audioPath + "bow_1.mp3", loop: true},
                        {id:"bass_groove", src:audioPath + "bass_groove.wav", loop: true}
                       ]);
    
    function handleComplete() {
        init();
    }
});

function init() {
    // create firstVocalBall
    firstVocalBall = new createjs.Shape();
    
    firstVocalBall.graphics.beginFill("#834dba").drawCircle(0, 0, 100);
    firstVocalBall.x = 250;
    firstVocalBall.y = 250;
    stage.addChild(firstVocalBall);
    
    firstVocalBall.on("pressmove", function(evt) {
        evt.target.x = evt.stageX;
        evt.target.y = evt.stageY;
    });
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
    
    firstVocalBall.addEventListener("dblclick", function(event) {
        turnOnBall(firstVocalBall);
        createjs.Sound.play("bass_groove").setLoop(-1);
    });
    
    
    secondVocalBall = new createjs.Shape();
    
    secondVocalBall.graphics.beginFill("#514dba").drawCircle(0, 0, 100);
    secondVocalBall.x = 500;
    secondVocalBall.y = 250;
    stage.addChild(secondVocalBall);
    
    secondVocalBall.on("pressmove", function(evt) {
        evt.target.x = evt.stageX;
        evt.target.y = evt.stageY;
    });
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
    
    secondVocalBall.addEventListener("dblclick", function(event) {
        turnOnBall(secondVocalBall);
        createjs.Sound.play("bow_1").setLoop(-1);
    });
    
    
    thirdVocalBall = new createjs.Shape();
    
    thirdVocalBall.graphics.beginFill("#4dba6f").drawCircle(0, 0, 100);
    thirdVocalBall.x = 750;
    thirdVocalBall.y = 250;
    stage.addChild(thirdVocalBall);
    
    thirdVocalBall.on("pressmove", function(evt) {
        evt.target.x = evt.stageX;
        evt.target.y = evt.stageY;
    });
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
    
    thirdVocalBall.addEventListener("dblclick", function(event) {
        turnOnBall(thirdVocalBall);
    });
    
    fourthVocalBall = new createjs.Shape();
    
    fourthVocalBall.graphics.beginFill("#4dbaad").drawCircle(0, 0, 100);
    fourthVocalBall.x = 1000;
    fourthVocalBall.y = 250;
    stage.addChild(fourthVocalBall);
    
    fourthVocalBall.on("pressmove", function(evt) {
        evt.target.x = evt.stageX;
        evt.target.y = evt.stageY;
    });
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
    
    fourthVocalBall.addEventListener("dblclick", function(event) {
        turnOnBall(fourthVocalBall);
    });
}



function turnOnBall(ball) {
    createjs.Tween.get(ball, {loop: true})
    .to({alpha: 0.4, scaleX: .9, scaleY: .9}, 1000, createjs.Ease.getPowInOut(2))
    .to({alpha: 1, scaleX: 1.2, scaleY: 1.2}, 1000, createjs.Ease.getPowInOut(2))
    .to({alpha: 0.4, scaleX: .9, scaleY: .9}, 1000, createjs.Ease.getPowInOut(2))
    .to({alpha: 1, scaleX: 1.2, scaleY: 1.2}, 1000, createjs.Ease.getPowInOut(2))
    .to({alpha: 0.4, scaleX: .3, scaleY: 1.2}, 1000, createjs.Ease.getPowInOut(2))
    .to({alpha: 1, scaleX: 1.2, scaleY: .3}, 1000, createjs.Ease.getPowInOut(2))
    .to({alpha: 0.4, scaleX: 0.2, scaleY: 0.05}, 1000, createjs.Ease.getPowInOut(2))
    .to({alpha: 1, scaleX: 1, scaleY: 1}, 1000, createjs.Ease.getPowInOut(2));
}



function calculateDragSpeed() {
   
}

setInterval(calculateDragSpeed, 50);



// -------------------------------------------------------------------------------------------------
// Make a full-screen canvas, compensate for window resizing (function taken from http://jsfiddle.net/jaredwilli/qFuDr/)
(function() {
        var canvas = document.getElementById('canvas'),
                context = canvas.getContext('2d');

        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, false);
        
        function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                
                /**
                 * Your drawings need to be inside this function otherwise they will be reset when 
                 * you resize the browser window and the canvas goes will be cleared.
                 */
                drawStuff(); 
        }
        resizeCanvas();
        function drawStuff() {
                // do your drawing stuff here
        }
})();