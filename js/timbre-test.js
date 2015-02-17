// create canvas for drawing
var stage = new createjs.Stage("intro-canvas");
var introColors = ["#001F3F", "#0074D9", "#7FDBFF", "#39CCCC", 
                   "#3D9970", "#2ECC40", "#01FF70", "#FFDC00", 
                   "#FF851B", "#FF4136", "#85144B", "#F012BE", "#B10DC9"];

var sound = T("sin", {freq:880, mul:0.5}).play();

var firstClickHappened = false;


$(window).click( function(e) {
    console.log(e.pageX);
    sound.set({freq:(e.pageX+20)});
});


// -------------------------------------------------------------------------------------------------
// Make a full-screen canvas, compensate for window resizing (function taken from http://jsfiddle.net/jaredwilli/qFuDr/)
(function() {
        var canvas = document.getElementById('intro-canvas'),
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

$("body").bind("click", function(e){
    if (!firstClickHappened) {
        $("h2").fadeOut(2000);
        firstClickHappened = true;
    }
    
    
    var circle = new createjs.Shape();
    
    // choose randomly from color palette array
    var randColor = introColors[Math.floor(Math.random() * introColors.length)];
    circle.graphics.beginFill(randColor).drawCircle(0, 0, e.pageX/5);
    circle.x = stage.mouseX;
    circle.y = stage.mouseY;
    stage.addChild(circle);
    xVal = e.pageX
    createjs.Tween.get(circle)
    .to({ x: xVal + 500}, 500, createjs.Ease.getPowInOut(2));
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
});
