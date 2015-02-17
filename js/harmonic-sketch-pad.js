var colorPalette = ["#001F3F", "#0074D9", "#7FDBFF", "#39CCCC", 
                   "#3D9970", "#2ECC40", "#01FF70", "#FFDC00", 
                   "#FF851B", "#FF4136", "#85144B", "#F012BE", "#B10DC9"];

var count = 0;

var boxes = [[false, "chord_0"], [false, "chord_1"], [false, "chord_2"],
            [false, "chord_3"], [false, "chord_4"], [false, "chord_5"],
            [false, "chord_6"], [false, "chord_7"], [false, "chord_8"],
            [false, "chord_9"], [false, "chord_10"], [false, "chord_11"],
            [false, "chord_12"], [false, "chord_13"], [false, "chord_14"], [false, "chord_15"]];

$("td").mouseover( function () {
    // choose randomly from color palette array
    var randColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    
    $(this).animate({backgroundColor: randColor}, 500);
    
    var arrayNumber = getSquareIdNumber($(this).attr("id"));
    
    
    if (boxes[arrayNumber][0] == false) {
        boxes[arrayNumber][0] = true;
        count++;   
    }
    
    if (count == 16) {   
        $("table").animate({width: "0%", height: "0%", borderRadius: "50%", 
                            left: "50%", top: "50%", opacity: "0.2"}, 2000);
        $("table").fadeOut(2000);
        $("body").animate({backgroundColor: "black"}, 2000);
    }
    
    $(this).unbind();
    
});



function getSquareIdNumber(squareId) {
    var squareIdNumber = squareId.substr(squareId.length - 2);
    var arrayNumber = parseInt(squareIdNumber);
    console.log(arrayNumber);
    /*
    if (squareIdNumber == "00") {
        var arrayNumber = 0;   
    }
    else {
        var arrayNumber = parseInt(squareIdNumber) - 1;
    }*/
    return arrayNumber;
}

