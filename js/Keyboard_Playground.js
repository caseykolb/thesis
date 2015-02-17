// keyboard-activated sound set
// Casey Kolb 12/22/14

var audioFiles = [["audio_1", ".square_1", false], ["audio_2", ".square_2", false], ["audio_3", ".square_3", false],
                    ["audio_4", ".square_4", false], ["audio_5", ".square_5", false], ["audio_6", ".square_6", false],
                    ["audio_7", ".square_7", false], ["audio_8", ".square_8", false], ["audio_9", ".square_9", false]];

var activatedCounter = 0;

$(document).ready (function () {
    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on("complete", handleComplete, this);
    queue.loadManifest([{id:"audio_1", src:"audio/Playground/Celesta.mp3"},
                        {id:"audio_2", src:"audio/Playground/Piano.mp3"},
                        {id:"audio_3", src:"audio/Playground/Strings.mp3"},
                        {id:"audio_4", src:"audio/Playground/Choir.mp3"},
                        {id:"audio_5", src:"audio/Playground/Synth1.mp3"},
                        {id:"audio_6", src:"audio/Playground/Synth2.mp3"},
                        {id:"audio_7", src:"audio/Playground/Synth3.mp3"},
                        {id:"audio_8", src:"audio/Playground/Guitar.mp3"},
                        {id:"audio_9", src:"audio/Playground/Bass.mp3"},
                       ]);
    
    function handleComplete() {
        alert("All of the audio files have been preloaded");
                        
        for (var i = 0; i < audioFiles.length; i++) 
            audioFiles[i][0] = createjs.Sound.play(audioFiles[i][0], {loop:-1, volume:0.0});              
                       
        init();
    }                       
});



function init() {
    $('h1').text('Use the keys QWER and ASDFG of your keyboard to activate and deactivate the sounds.'); 
    
    function activateSquare (x) {
        $(audioFiles[x][1]).animate({opacity: 1}, 200);
        tween = createjs.Tween.get(audioFiles[x][0]).to({volume:1.0}, 500);
    
        audioFiles[x][2] = true;
        activatedCounter++;

    }

    function deactivateSquare (x) {
        $(audioFiles[x][1]).animate({opacity: 0}, 200);
        tween = createjs.Tween.get(audioFiles[x][0]).to({volume:0.0}, 500);

        audioFiles[x][2] = false;
        activatedCounter--;
    }
    
    $(document).keydown (function (e) {

        if (e.which == 81)  // "q" key 
        {
            if (!audioFiles[0][2]) {
                activateSquare(0);
                return;
            }
            else {
                deactivateSquare(0);
                return;
            }
        }

        if (e.which == 87)  // "w" key
        {
            if (!audioFiles[1][2]) {
                activateSquare(1);
                return;
            }
            else {
                deactivateSquare(1);
                return;
            }
        }

        if (e.which == 69)  // "e" key
        {
            if (!audioFiles[2][2]) {
                activateSquare(2);
                return;
            }
            else {
                deactivateSquare(2);
                return;
            }
        }

        if (e.which == 82)  // "r" key
        {
            if (!audioFiles[3][2]) {
                activateSquare(3);
                return;
            }
            else {
                deactivateSquare(3);
                return;
            }
        }

        if (e.which == 65)  // "a" key
        {
            if (!audioFiles[4][2]) {
                activateSquare(4);
                return;
            }
            else {
                deactivateSquare(4);
                return;
            }
        }

        if (e.which == 83)  // "s" key
        {
            if (!audioFiles[5][2]) {
                activateSquare(5);
                return;
            }
            else {
                deactivateSquare(5);
                return;
            }
        }

        if (e.which == 68)  // "d" key
        {
            if (!audioFiles[6][2]) {
                activateSquare(6);
                return;
            }
            else {
                deactivateSquare(6);
                return;
            }
        }

        if (e.which == 70)  // "f" key
        {
            if (!audioFiles[7][2]) {
                activateSquare(7);
                return;
            }
            else {
                deactivateSquare(7);
                return;
            }
        }

        if (e.which == 71)  // "g" key
        {
            if (!audioFiles[8][2]) {
                activateSquare(8);
                return;
            }
            else {
                deactivateSquare(8);
                return;
            }
        }
    });
}

