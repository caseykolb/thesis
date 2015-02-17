// Dependencies: Countdown 360 JQuery Plugin by John Schult

var clocks = ["#countdown_1", "#countdown_2", "#countdown_3"];
var audioPath = "audio/transition-test/";
var initialAudio = "acoustic.mp3"
var audioFiles = ["breeze.mp3", "doodoo.mp3", "groovy.mp3"];
// randomly assign 0, 1, or 2 for the case in which the user does not select a clock
var selectedClock = "#countdown_" + Math.floor((Math.random() * 3) + 1);
var clockNumber = clocks.indexOf(selectedClock);

console.log(selectedClock);

$("#start").click( function() {
    document.getElementById("init_audio").play();
    $("#start").fadeOut(100);
    
    // start clocks after 10 seconds
    setTimeout(function() {
        startClocks();
     }, 2000);
});


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

function startClocks () {
    
    $("td").css("opacity", "0.4");
    $( "body" ).append( "<h4 style='color: black; opacity: 0.8; margin-top: 40%; text-align: center'>Select A Clock</h4>");
    
    $("#countdown_1").countdown360({
      radius      : 60.5,
      seconds     : 5,
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
            setTimeout(function() {
                $(selectedClock).fadeOut(2000);
            }, 3000);
            playNewTrack();
        }
          
      }
    }).start()

    $("#countdown_2").countdown360({
      radius      : 60.5,
      seconds     : 5,
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
            setTimeout(function() {
                $(selectedClock).fadeOut(2000);
            }, 3000);
            playNewTrack();
        }
      }
    }).start()

    $("#countdown_3").countdown360({
      radius      : 60.5,
      seconds     : 5,
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
            setTimeout(function() {
                $(selectedClock).fadeOut(2000);
            }, 3000);
            playNewTrack();
        }
      }
    }).start()

}

function playNewTrack() {
    // fade initial audio
    $("#init_audio").animate({volume: 0.0}, 3000);
    // play next selected audio file based on clock number chosen
    $("#next_audio").attr("src", audioPath + audioFiles[clockNumber]);
    $('#next_audio').prop("volume", 0.0);
    $("#next_audio").animate({volume: 1.0}, 3000); 
    document.getElementById("next_audio").play();   
}


