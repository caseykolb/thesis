// Dependencies: Mousetrap.js and CreateJS Suite

var audioPath = "audio/keyboard-animations/";
var manifest = [
    {id:"q-sound", src:"q.mp3"}
    ];

window.onload= init();

function init() {
    // create a manifest and audioPath (above)
    createjs.Sound.addEventListener("fileload", handleLoad);
    createjs.Sound.registerManifest(manifest, audioPath);
}

function handleLoad() {
    //do nothing
}



function drawCircle() {
    var newSound = createjs.Sound.play('q' + '-sound')
    newSound.volume = 0.3;
    
    
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    
    createjs.Tween.get(circle)
    .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
    .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
    .to({ alpha: 0, y: 225 }, 100);
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
}

function animationOne() {
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    
    createjs.Tween.get(square)
    .to({ borderRadius: 50 }, 1000, createjs.Ease.getPowInOut(4))
    .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
    .to({ alpha: 0, y: 225 }, 100);
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
}

Mousetrap.bind('q', drawCircle);
Mousetrap.bind('e', animationOne);

Mousetrap.bind('w', function() {1
    $("body").animate({backgroundColor: "rgba(222, 57, 57, 1)"}, 200);
    $("body").animate({backgroundColor: "#fff"}, 200);
});

$(document).keypress(function(e) {
    var char = String.fromCharCode(e.which);
    $('#' + char).animate({
        backgroundColor: '#000',
        color: 'white'
        }, 100);
    $('#' + char).animate({
        backgroundColor: '#fff',
        color: 'black'
        }, 50);
    
});
/*
$(document).keyup(function(e) {
    var char = String.fromCharCode(e.which);
    console.log(char);
    $('#' + char).animate({
        backgroundColor: '#fff',
        color: 'black'
        }, 100);
});*/