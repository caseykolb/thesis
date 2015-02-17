var colors = ["#536A9F", "#B43C3E", "#478D4F", "#6B429F", 
                   "#E2D57C", "#4C9F8D", "#87408F", "#D3A229", 
                   "#B93537", "#68458C", "#46867A", "#86933E"];

var audioPath = "audio/hover-squares/";
var square_1 = new Howl({urls: [audioPath + 'square_1.mp3'], loop: true, volume: 0.0, buffer: true});
var square_2 = new Howl({urls: [audioPath + 'square_2.mp3'], loop: true, volume: 0.0, buffer: true});
var square_3 = new Howl({urls: [audioPath + 'square_3.mp3'], loop: true, volume: 0.0, buffer: true});
var square_4 = new Howl({urls: [audioPath + 'square_4.mp3'], loop: true, volume: 0.0, buffer: true});
var square_5 = new Howl({urls: [audioPath + 'square_5.mp3'], loop: true, volume: 0.0, buffer: true});
var square_6 = new Howl({urls: [audioPath + 'square_6.mp3'], loop: true, volume: 0.0, buffer: true});
var squareSounds = [[square_1, false], [square_2, false], [square_3, false], 
                    [square_4, false], [square_5, false], [square_6, false]];

var firstSquareClicked;

$(document).ready( function() { 
    for (var i = 0; i < squareSounds.length; i++) {
        squareSounds[i][0].play();
    }
    var newTableHeight = ($("window").height());
    $("table td").css({height: newTableHeight/2});
});

$('[id^="square_"]').mouseover( function() {
    var randColor = colors[Math.floor(Math.random() * colors.length)]
    $(this).animate({backgroundColor: randColor}, 50);
    var arrayNumber = getSquareIdNumber($(this).attr("id"));
    squareSounds[arrayNumber][0].volume(1.0);
});

$('[id^="square_"]').mouseout( function() {
    $(this).animate({backgroundColor: "#fff"}, 50);
    var arrayNumber = getSquareIdNumber($(this).attr("id"));
    squareSounds[arrayNumber][0].volume(0.0);
});

$('[id^="square_"]').click( function() {
    var arrayNumber = getSquareIdNumber($(this).attr("id"));
    
    // if square is unlocked, lock it
    if (squareSounds[arrayNumber][1] == false) {
        var randColor = colors[Math.floor(Math.random() * colors.length)]
        $(this).animate({backgroundColor: randColor}, 150);
        $(this).unbind("mouseover mouseout");
        squareSounds[arrayNumber][1] = true;
        return;
    }
    
    // if square is locked, unlock it
    if (squareSounds[arrayNumber][1] == true) {
        $(this).animate({backgroundColor: "#fff"}, 100);
        
        $(this).bind("mouseover", function(){
            var randColor = colors[Math.floor(Math.random() * colors.length)]
            $(this).animate({backgroundColor: randColor}, 50);
            var arrayNumberNew = getSquareIdNumber($(this).attr("id"));
            squareSounds[arrayNumberNew][0].volume(1.0);
        });

        $(this).bind("mouseout", function(){
            $(this).animate({backgroundColor: "#fff"}, 50);
            var arrayNumberNew = getSquareIdNumber($(this).attr("id"));
            squareSounds[arrayNumberNew][0].volume(0.0);
        });
        squareSounds[arrayNumber][1] = false;
    }
    
});
    
function getSquareIdNumber(squareId) {
    var squareIdNumber = squareId.substr(squareId.length - 1);
    var arrayNumber = parseInt(squareIdNumber) - 1;
    return arrayNumber;
}