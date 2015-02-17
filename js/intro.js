var audioPath = "audio/intro/";

// Create intro audio samples
var introMusic = new Howl({
  urls: ['audio/intro/init-intro-music.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.6
});

var buttonPushCinema = new Howl({urls: [audioPath + 'button-push-cinema.mp3'], volume: 1.0});

var tick_1 = new Howl({urls: [audioPath + 'sample-ticks/tick_1.mp3']});
var tick_2 = new Howl({urls: [audioPath + 'sample-ticks/tick_2.mp3']});
var tick_3 = new Howl({urls: [audioPath + 'sample-ticks/tick_3.mp3']});
var tick_4 = new Howl({urls: [audioPath + 'sample-ticks/tick_4.mp3']});
var tick_5 = new Howl({urls: [audioPath + 'sample-ticks/tick_5.mp3']});
var ticks = [tick_1, tick_2, tick_3, tick_4, tick_5];

var bop_1 = new Howl({urls: [audioPath + 'bops/bop_1.mp3']});

var bops = [bop_1];

var nextSampleToPlay;

// create canvas for drawing
var stage = new createjs.Stage("intro-canvas");
var introColors = ["#001F3F", "#0074D9", "#7FDBFF", "#39CCCC", 
                   "#3D9970", "#2ECC40", "#01FF70", "#FFDC00", 
                   "#FF851B", "#FF4136", "#85144B", "#F012BE", "#B10DC9"];
var firstClickHappened = false;

// Audio for after play button is pushed
var afterButtonPush = new Howl({urls: [audioPath + 'after-button-push.mp3']});
var panningGuitar = new Howl({urls: [audioPath + 'panning-guitar.mp3'], volume: 0.8});

// -------------------------------------------------------------------------------------------------
// Load all audio files using SoundJS
$(document).ready (function () {
    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on("complete", handleComplete, this);
    queue.loadManifest([{id:"sample_2-1", src:audioPath + "sequence_2/sample_2-1.mp3"},
                        {id:"sample_2-2", src:audioPath + "sequence_2/sample_2-2.mp3"},
                       ]);
    
    function handleComplete() {
        var sequence = prompt("Which Sequence?", "secondSequence");
        if (sequence == "secondSequence") {
            startSecondSequence();
        }
    
    }    
});

                        
// catch reload                        
/*$(window).bind('beforeunload',function(){

    //save info somewhere
    
    return 'WARNING: If you refresh the page, the piece will start again from the beginning.';

});*/

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

// -------------------------------------------------------------------------------------------------
// Initial Event Handling
// Whenever the screen is clicked, play circle animations and random tick sample
$("body").bind("click", initialTickMaker);
    

// when center play button is pressed, begin sequences of music
function playThesis() {
    // stop tickMaker
    $("body").unbind("click", initialTickMaker);
    createjs.Ticker.removeAllEventListeners();
    stage.clear();
    
    // play new music
    introMusic.fadeOut(0.0, 3000);
    buttonPushCinema.play();
    afterButtonPush.play();
    panningGuitar.play();
    
    // remove click event from play button
    $("#play-thesis").unbind("click");
    
    if (!firstClickHappened)
        $("h4").fadeOut(2000);
    
    // reset click for next sequence
    firstClickHappened = false;
    
    $("body").animate({backgroundColor: "#000"}, 4000);
    $("#play-thesis").fadeOut(2000);
    $("header").fadeOut(2000);
    
    // append new instructions for user
    $( "#top" ).append( "<h4 style='color: white; opacity: 0.0; margin-top: 20px'>(click and drag)</h4>");
    
    setTimeout(function() {
        $("h4").animate({opacity: "1.0"}, 2000);
        startDrawing();
    }, 3000);

        
    // show transition 10 seconds before next sequence
    setTimeout(function() {
        startClocks();                
     }, 19500);
    
                        
    // transition to sequence 2
    setTimeout(function() {
        startSecondSequence();
     }, 29500);
    
}


function initialTickMaker() {
    
    // check if user has already clicked somewhere
    // if so, fade the sub-header
    if (!firstClickHappened) {
        $("h4").fadeOut(1000);
        $("#play-thesis").animate({opacity: "1.0"}, 2000);
        $("#play-thesis").bind("click", playThesis);
        firstClickHappened = true;
    }
    
    var randNum = Math.floor(Math.random() * 5);
    
    // play random tick
    ticks[randNum].play();
    
    var circle = new createjs.Shape();
    
    // choose randomly from color palette array
    var randColor = introColors[Math.floor(Math.random() * introColors.length)];
    circle.graphics.beginFill(randColor).drawCircle(0, 0, 10);
    circle.x = stage.mouseX;
    circle.y = stage.mouseY;
    stage.addChild(circle);
    
    //createjs.Tween.get(circle)
    //.to({ alpha: 0}, 500, createjs.Ease.getPowInOut(2));
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
}
       

// -------------------------------------------------------------------------------------------------
// Second Thesis Sequence
                   
function startSecondSequence() {
    $("body").bind("click", secondSequenceAnimation);
    
    $("body").animate({backgroundColor: "#72587F"}, 50);
    $("#intro-canvas").unbind();
    clearArea();
    
    setTimeout(function() {
        if (nextSampleToPlay == null) {
            createjs.Sound.play("sample_2-1");
        }
        else {
            createjs.Sound.play(nextSampleToPlay);
        }
     }, 1500); 
    
    setTimeout(function() {
        $("body").animate({backgroundColor: "#d83636"}, 50);
     }, 27000); 

}

function secondSequenceAnimation() {
    // check if user has already clicked somewhere
    // if so, fade the sub-header
    if (!firstClickHappened) {
        $("h4").fadeOut(1000);
        $("#play-thesis").animate({opacity: "1.0"}, 2000);
        $("#play-thesis").bind("click", playThesis);
        firstClickHappened = true;
    }
    
    //var randNum = Math.floor(Math.random() * 5);
    
    // play random tick
    bops[0].play();
    
    var circle = new createjs.Shape();
    
    // choose randomly from color palette array
    var randColor = introColors[Math.floor(Math.random() * introColors.length)];
    circle.graphics.beginFill(randColor).drawCircle(0, 0, 10);
    circle.x = stage.mouseX;
    circle.y = stage.mouseY;
    stage.addChild(circle);
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
}



// -------------------------------------------------------------------------------------------------
// Third Party: Code from http://www.codicode.com/art/how_to_draw_on_a_html5_canvas_with_a_mouse.aspx

var mousePressed = false;
var lastX, lastY;
var ctx;

function startDrawing() {
    ctx = document.getElementById('intro-canvas').getContext("2d");
    panningGuitar.mute();
    $('#intro-canvas').mousedown(function (e) {
        
        if (!firstClickHappened) {
            $("h4").fadeOut(2000);
            firstClickHappened = true;
        }
        
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
        
    });

    $('#intro-canvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
            panningGuitar.unmute();
            panningGuitar.pos3d(e.pageX/($( window ).width()/2) - 1);
        }
    });

    $('#intro-canvas').mouseup(function (e) {
        mousePressed = false;
        panningGuitar.pos3d(0.0);
        panningGuitar.mute();
    });
}

function Draw(x, y, isDown) {
    var randColor = introColors[Math.floor(Math.random() * introColors.length)];
    var randWidth = Math.floor(Math.random() * 50) + 10;
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = randColor;
        ctx.lineWidth = randWidth;
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
        panningGuitar.unmute();
    }
    lastX = x; lastY = y;
}
	
function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}



// -------------------------------------------------------------------------------------------------
// Clock Transition
// Dependencies: Countdown 360 JQuery Plugin by John Schult

function startClocks () {
    var clocks = ["#countdown_1", "#countdown_2", "#countdown_3"];
    // randomly assign 0, 1, or 2 for the case in which the user does not select a clock
    var selectedClock = "#countdown_" + Math.floor((Math.random() * 3) + 1);
    var clockNumber = clocks.indexOf(selectedClock);


    $( "td" ).hover(
        function() {
        $(this).animate({opacity: 1.0}, 200);
        }, 
        function() {
        $(this).animate({opacity: 0.4}, 200);
        }
    );


    $("td div").click( function() {
        $("h4").fadeOut(2000);
        selectedClock = "#" + $(this).prop('id');
        clockNumber = clocks.indexOf(selectedClock);

        // turn off hover effect on all clocks
        $( "td" ).off( "mouseenter mouseleave" );

        // remove clocks not selected
        for (var i = 0; i < clocks.length; i++) {
            if (clocks[i] != selectedClock) {
                $(clocks[i]).fadeOut(2000);
            }
        }

    });

    
    $("td").css("opacity", "0.4");
    $( "body" ).append( "<h4 style='color: white; opacity: 0.8; text-align: center'>Select A Clock</h4>");
    
    $("#countdown_1").countdown360({
      radius      : 60.5,
      seconds     : 10,
      strokeWidth : 10,
      fillStyle   : '#7836c4',
      strokeStyle : '#a06fe6',
      fontSize    : 50,
      fontColor   : '#FFFFFF',
      autostart: false,
      onComplete  : function () {
        // apply fadeOut onComplete if user does not select clock
        if ("#countdown_1" != selectedClock) {
            $("#countdown_1").fadeOut(2000);
            $("h4").fadeOut(2000);
        }
        else {
            $( "td" ).off( "mouseenter mouseleave" );
            nextSampleToPlay = "sample_2-1";
            setTimeout(function() {
                $(selectedClock).fadeOut(2000);
            }, 3000);
        }
          
      }
    }).start()

    $("#countdown_2").countdown360({
      radius      : 60.5,
      seconds     : 10,
      strokeWidth : 10,
      fillStyle   : '#3b36c4',
      strokeStyle : '#6f78e6',
      fontSize    : 50,
      fontColor   : '#FFFFFF',
      autostart: false,
      onComplete  : function () {
        // apply fadeOut onComplete if user does not select clock
        if ("#countdown_2" != selectedClock) {
            $("#countdown_2").fadeOut(2000);
            $("h4").fadeOut(2000);
        }
        else {
            $( "td" ).off( "mouseenter mouseleave" );
            nextSampleToPlay = "sample_2-2";
            setTimeout(function() {
                $(selectedClock).fadeOut(2000);   
            }, 3000);
        }
      }
    }).start()

    $("#countdown_3").countdown360({
      radius      : 60.5,
      seconds     : 10,
      strokeWidth : 10,
      fillStyle   : '#26773e',
      strokeStyle : '#59c154',
      fontSize    : 50,
      fontColor   : '#FFFFFF',
      autostart: false,
      onComplete  : function () {
        // apply fadeOut onComplete if user does not select clock
        if ("#countdown_3" != selectedClock) {
            $("#countdown_3").fadeOut(2000);
            $("h4").fadeOut(2000);
        }
        else {
            $( "td" ).off( "mouseenter mouseleave" );
            nextSampleToPlay = "sample_2-2";
            setTimeout(function() {
                $(selectedClock).fadeOut(2000);
            }, 3000);
        }
      }
    }).start()

}



// -------------------------------------------------------------------------------------------------
// Auto-generated by Adobe Dreamweaver: Functions to swap initial play button images 
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}