var introColors = ["#001F3F", "#0074D9", "#39CCCC", 
                   "#3D9970", "#2ECC40", "#01FF70", 
                   "#FF851B", "#FF4136", "#85144B", 
                   "#F012BE", "#B10DC9"];

$("#circle").click( function() {
    $("#click_me").fadeOut(200);
    
    $("#circle").animate({width: "90%", height: $(document).height()/(1.2), 
                          borderRadius: "0px", position: "relative", backgroundColor: "white"}, 1500);
    
    $("#word-sad").animate({left: "50px", top: "50px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    $("#word-happy").animate({left: "100px", top: "75px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    $("#word-angry").animate({left: "500px", top: "500px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    $("#word-confused").animate({left: "65px", top: "600px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    $("#word-emotional").animate({left: "750px", top: "200px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    $("#word-acoustic").animate({left: "1000px", top: "400px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    $("#word-guilty").animate({left: "1100px", top: "50px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    $("#word-sweet").animate({left: "600px", top: "350px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    $("#word-untouched").animate({left: "700px", top: "100px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    $("#word-pensive").animate({left: "300px", top: "160px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    $("#word-livid").animate({left: "100px", top: "500px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    $("#word-electronic").animate({left: "350px", top: "300px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    $("#word-bubbling").animate({left: "900px", top: "150px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    $("#word-evasive").animate({left: "700px", top: "400px", opacity: "1.0", fontSize: "24px", fontWeight: "bold", 
                       color: introColors[Math.floor(Math.random() * introColors.length)]}, 1500);
    
    
    init();
});

function init() {
    $("#circle").unbind();
    $('[id^="word-"]').mouseover(function() {
           $(this).animate({fontSize: "48px", letterSpacing: "20px"}, 500);
    });
    $('[id^="word-"]').mouseout(function() {
           $(this).animate({fontSize: "24px", letterSpacing: "0px"}, 100);
    });
    
}