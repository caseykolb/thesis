var audioPath = "audio/popping-bubbles/bubble_";
var audioExtension = ".mp3";
var bubbleImage = "img/Bubble_Icon.png";
var bubbleCounter = 0;


$(document).ready(function() {
    //if no method and options specified
    //start the floating animation with defaults settings
});

setInterval(function() {
    bubbleCounter++;
    var newBubbleImage = '<img id="bubble_' + bubbleCounter + '" src="img/Bubble_Icon.png" />';
    $('#bubble-container').prepend(newBubbleImage);
    var randomX = Math.floor((Math.random() * 100) + 1);
    var randomY = Math.floor((Math.random() * 100) + 1);
    $('#bubble_' + bubbleCounter).css({Top: randomY, 
                                        marginLeft : randomX, 
                                        opacity: 0.0});    
    animateBubble();
    }, 2000);


function animateBubble() {
    $("#bubble_" + bubbleCounter).animate({opacity: 1.0}, 500);
    
    setTimeout(function() {
        $("#bubble_" + bubbleCounter).jqFloat({
        width: 300,
        height: 300,
        speed: 1000
        });
     }, 500);
}


$('[id^="bubble_"]').click( function() {
    $(this.id).jqFloat('stop');
    $(this.id).remove();
    
    // randomly select bubble audio
    var bubbleAudio = document.getElementById("bubble_" + Math.floor((Math.random() * 10) + 1));
    bubbleAudio.play();
});