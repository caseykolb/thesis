var audioPath = "audio/speck/";
var colorPalette_1 = ["#001F3F", "#0074D9", "#7FDBFF", "#39CCCC", 
                   "#3D9970", "#2ECC40", "#01FF70", "#FFDC00", 
                   "#FF851B", "#FF4136", "#85144B", "#F012BE", "#B10DC9"];

var colorPalette_2 = ["#2E0854", "#7D26CD", "#71637D", "#694489", 
                   "#BDA0CB", "#5E2D79", "#E066FF", "#4F2F4F", 
                   "#871F78", "#4B0082", "#EED2EE", "#4F2F4F", "#9A32CD"];

// Fall palette
var colorPalette_3 = ["#D6CFC9", "#C2C290", "#4A572C", "#803018", "#E34819", "#E87F60"];

var numOfClicks = 1;
var group;
var starGroup;

var firstInterval;
var secondInterval;

// Experiments with Two.js
// Make an instance of two and place it on the page.
var elem = document.getElementById('draw-shapes').children[0];
var params = { width: $(window).width(), height: $(window).height() };
var two = new Two(params).appendTo(elem);

// Load all audio files using SoundJS
$(document).ready (function () {
    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on("complete", handleComplete, this);
    queue.loadManifest([{id:"speck-vocals", src:audioPath + "speck-vocals.mp3"}]);
    
    function handleComplete() {
    
    }    
});

function centeredSpeck() {
    var circle = two.makeCircle($(window).width()/2, $(window).height()/2, 5);
    circle.fill = '#000';
    circle.stroke = 'gray'; // Accepts all valid css color
    circle.opacity = 0.75;
    circle.linewidth = 2;
    two.update();
    $("body").unbind();
    createjs.Sound.play("speck-vocals");
    group = two.makeGroup(circle);
    setTimeout(function() {
        randomSpeck();
    }, 2000);
    setTimeout(function() {
        randomSpeck();
    }, 4000);
    setTimeout(function() {
        randomSpeck();
    }, 4500);
    setTimeout(function() {
        randomSpeck();
    }, 5000);
    setTimeout(function() {
        randomSpeck();
    }, 5500);
    setTimeout(function() {
        randomSpeck();
    }, 6000);
    setTimeout(function() {
        randomSpeck();
    }, 8000);
    setTimeout(function() {
        randomSpeck();
    }, 10250);
    setTimeout(function() {
        randomSpeck();
    }, 10750);
    setTimeout(function() {
        randomSpeck();
    }, 11000);
    setTimeout(function() {
        randomSpeck();
    }, 11250);
    setTimeout(function() {
        randomSpeck();
    }, 11500);
    setTimeout(function() {
        firstInterval = setInterval(randomSpeck, 10);
    }, 13000);
    
    setTimeout(function() {
        night();
    }, 17500);
}

function randomSpeck() {
    randX = Math.floor(Math.random() * $(window).width());
    randY = Math.floor(Math.random() * $(window).height());
    randColor = colorPalette_1[Math.floor(Math.random() * colorPalette_1.length)];
    randSize = Math.floor(Math.random() * 3 + 4);
    var circle = two.makeCircle(randX, randY, randSize);
    circle.fill = randColor;
    circle.stroke = 'gray'; // Accepts all valid css color
    circle.opacity = 0.75;
    circle.linewidth = 2;
    circle.addTo(group);
    two.update();
}

function shootingStars() {
    randX1 = Math.floor(Math.random() * $(window).width());
    randY1 = Math.floor(Math.random() * $(window).height());
    randX2 = Math.floor(Math.random() * $(window).width());
    randY2 = Math.floor(Math.random() * $(window).height());
    var line = two.makeLine(randX1, randY1, randX2, randY2);
    line.fill = "white";
    line.stroke = 'white'; // Accepts all valid css color
    line.opacity = 0.75;
    line.linewidth = 2;
    line.addTo(starGroup);
}


$("body").click(centeredSpeck);

function generateSpecks() {
    firstInterval = setInterval(randomSpeck, 10);
}
function night() {
    group.fill = '#fff';
    clearInterval(firstInterval);
    $("body").animate({backgroundColor: "#000000"}, 5000);
    /*
    startNight();
    
    $('.stars').css({backgroundImage: "url(../img/stars.png )"}); 
    var shootingStarObj = new ShootingStar( "body" );
    shootingStarObj.launch();
    */
    /*
    two.bind('update', function(frameCount) {
      shootingStars();
    }).play();  // Finally, start the animation loop
    */
    /*setTimeout(function() {
        two.clear();
    }, 4000); */  
}

// Code from: http://codepen.io/manufosela/pen/Gymih
function startNight(){
      /**
        author: @manufosela
        2013/08/27    copyleft 2013

        ShootingStar class Main Methods:
          launch: launch shooting stars every N seconds received by param. 10 seconds by default.
          launchStar: launch a shooting star. Received options object by param with:
             - dir (direction between 0 and 1)
             - life (between 100 and 400)
             - beamSize (between 400 and 700)
             - velocity (between 2 and 10)
      **/

      ShootingStar = function( id ) {
        this.n = 0;
        this.m = 0;
        this.defaultOptions = { velocity:8, starSize:10, life:300, beamSize:400, dir:-1 };
        this.options = {};
        id = ( typeof id != "undefined" )?id:"";
        this.capa = ( $( id ).lenght > 0 )?"body":id;
        this.wW = $( this.capa ).innerWidth();
        this.hW = $( this.capa ).innerHeight();
      };

      ShootingStar.prototype.addBeamPart = function( x, y ) {
        this.n++;
        var name = this.getRandom( 100, 1 );
        $( "#star"+name ).remove();
        $( this.capa ).append( "<div id='star"+name+"'></div>" );
        $( "#star"+name ).append( "<div id='haz"+this.n+"' class='haz' style='position:absolute; color:#FF0; width:10px; height:10px; font-weight:bold; font-size:"+this.options.starSize+"px'>·</div>" );
        if ( this.n > 1 ) $( "#haz" + ( this.n - 1 ) ).css( { color:"rgba(255,255,255,0.5)" } );
        $( "#haz" + this.n ).css( { top: y + this.n, left: x + ( this.n * this.options.dir ) } );
      }

      ShootingStar.prototype.delTrozoHaz = function() {
        this.m++;
        $( "#haz" + this.m ).animate( {opacity:0}, 75 );
        if ( this.m >= this.options.beamSize ) { $( "#ShootingStarParams" ).fadeOut( "slow" ); }
      }

      ShootingStar.prototype.getRandom = function( max, min ) {
        return Math.floor( Math.random() * (max - min + 1)) + min;
      }

      ShootingStar.prototype.toType = function ( obj ) {
        if ( typeof obj === "undefined" ) { return "undefined"; /* consider: typeof null === object */ }
        if ( obj === null ) { return "null"; }
        var type = Object.prototype.toString.call( obj ).match( /^\[object\s(.*)\]$/ )[1] || '';
        switch ( type ) {
          case 'Number': if ( isNaN( obj ) ) { return "nan"; } else { return "number"; }
          case 'String': case 'Boolean': case 'Array': case 'Date': case 'RegExp': case 'Function': return type.toLowerCase();
        }
        if ( typeof obj === "object" ) { return "object"; }
        return undefined;
      }

      ShootingStar.prototype.launchStar = function( options ) {
        if ( this.toType( options ) != "object" ) { options = {}; }
        this.options = $.extend( {}, this.defaultOptions, options );
        this.n=0;
        this.m=0;
        var i=0, l=this.options.beamSize,
            x=this.getRandom( this.wW - this.options.beamSize - 100, 100 ), y=this.getRandom( this.hW - this.options.beamSize - 100, 100 ),
            self = this;
        for( ; i<l; i++ ) { setTimeout( function(){ self.addBeamPart( x, y ); }, self.options.life + ( i * self.options.velocity ) ); }
        for( i=0; i<l; i++ ) { setTimeout( function(){ self.delTrozoHaz() }, self.options.beamSize + ( i * self.options.velocity ) ); }
      }

      ShootingStar.prototype.launch = function( everyTime ) {
        if ( this.toType( everyTime ) != "number" ) { everyTime = 10; }
        everyTime = everyTime * 1000;
        this.launchStar();
        var self = this;
        setInterval( function() {
          var options = {
            dir: ( self.getRandom( 1, 0 ))?1:-1,
            life: self.getRandom( 400, 100 ),
            beamSize: self.getRandom( 700, 400 ),
            velocity: self.getRandom( 10, 4 )
          }
          self.launchStar( options );
        }, everyTime );
      }

};

