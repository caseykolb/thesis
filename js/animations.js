var colorPalette_1 = ["#001F3F", "#0074D9", "#7FDBFF", "#39CCCC", 
                   "#3D9970", "#2ECC40", "#01FF70", "#FFDC00", 
                   "#FF851B", "#FF4136", "#85144B", "#F012BE", "#B10DC9"];

var colorPalette_2 = ["#2E0854", "#7D26CD", "#71637D", "#694489", 
                   "#BDA0CB", "#5E2D79", "#E066FF", "#4F2F4F", 
                   "#871F78", "#4B0082", "#EED2EE", "#4F2F4F", "#9A32CD"];

// Fall palette
var colorPalette_3 = ["#D6CFC9", "#C2C290", "#4A572C", "#803018", "#E34819", "#E87F60"];

// -------------------------------------------------------------------------------------------------
// Make a full-screen canvas, compensate for window resizing (function taken from http://jsfiddle.net/jaredwilli/qFuDr/)
(function() {
        var canvas = document.getElementById('tween-canvas'),
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

            
            var stage = new createjs.Stage("tween-canvas");

            Mousetrap.bind('1', polyStarRain);
            Mousetrap.bind('2', rectRain);
            Mousetrap.bind('d', daytime);
            Mousetrap.bind('n', nighttime);

            function polyStarRain() {
                var randX, randY, randSize;

                for (var i = 0; i < 40; i++) {
                    randSize = Math.floor(Math.random() * 50 + 10);
                    randSides = Math.floor(Math.random() * 6 + 6);
                    var polystar = new createjs.Shape();
                    polystar.graphics.beginFill(colorPalette_2[Math.floor(Math.random() * colorPalette_2.length)])
                        .drawPolyStar(0, 0, randSize, randSides, 0.6, -90);
                    stage.addChild(polystar);
                    
                    randX = Math.floor(Math.random() * $(window).width());
                    randY = Math.floor(Math.random() * $(window).height());
                    createjs.Tween.get(polystar)
                        .to({x: randX, y: randY}, 1000, createjs.Ease.getPowInOut(4));
                }
                
                createjs.Ticker.setFPS(60);
                createjs.Ticker.addEventListener("tick", stage);
            }
            
            function rectRain() {
                var randX, randY;

                for (var i = 0; i < 20; i++) {
                    var rect = new createjs.Shape();
                    rect.graphics.beginFill(colorPalette_1[Math.floor(Math.random() * colorPalette_1.length)])
                        .drawRect(0, 0, 50, 50);
                    stage.addChild(rect);
                    
                    randX = Math.floor(Math.random() * $(window).width());
                    randY = Math.floor(Math.random() * $(window).height());
                    createjs.Tween.get(rect)
                        .to({x: randX, y: randY}, 1000, createjs.Ease.getPowInOut(4));
                }
                
                createjs.Ticker.setFPS(60);
                createjs.Ticker.addEventListener("tick", stage);
            }
            
            function daytime() {
                $('body').animate({backgroundColor: "#7ec0ee"}, 500);
                
            }

            function nighttime() {
                $('body').animate({backgroundColor: "#363636"}, 500);
                polyStarRain();
            }
        }
})();



// Experiments with Two.js
// Make an instance of two and place it on the page.
var elem = document.getElementById('draw-shapes').children[0];
var params = { width: $(window).width(), height: $(window).height() };
var two = new Two(params).appendTo(elem);

// two has convenience methods to create shapes.
var circle = two.makeCircle(72, 100, 50);
var rect = two.makeRectangle(213, 100, 100, 100);

// The object returned has many stylable properties:
circle.fill = '#FF8000';
circle.stroke = 'orangered'; // Accepts all valid css color
circle.opacity = 0.75;
circle.linewidth = 5;

rect.fill = 'rgb(0, 200, 255)';
rect.opacity = 0.75;
rect.noStroke();

// Groups can take an array of shapes and/or groups.
var group = two.makeGroup(circle, rect);

group.translation.set(two.width / 2, two.height / 2);
group.scale = 0;
group.noStroke();

two.update();

function spin() {
    // Bind a function to scale and rotate the group
    // to the animation loop.
    two.bind('update', function(frameCount) {
      // This code is called everytime two.update() is called.
      // Effectively 60 times per second.
      if (group.scale > 0.9999) {
        group.scale = group.rotation = 0;
      }
      var t = (1 - group.scale) * 0.125;
      group.scale += t;
      group.rotation += t * 4 * Math.PI;
    }).play();  // Finally, start the animation loop
}


