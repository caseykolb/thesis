/*if('webkitAudioContext' in window) {
    var myAudioContext = new webkitAudioContext();
}


request = new XMLHttpRequest();
request.open('GET', 'audio/transition-test/acoustic.mp3', true);
request.responseType = 'arraybuffer';
request.addEventListener('load', bufferSound, false);
request.send();

var mySource;

function bufferSound(event) {
    var request = event.target;
    var source = myAudioContext.createBufferSource();
    source.buffer = myAudioContext.createBuffer(request.response, false);
    mySource = source;
}

mySource.play();
*/
var context = new AudioContext();
var tuna = new Tuna(context);

var chorus = new tuna.Chorus({
                 rate: 1.5,
                 feedback: 0.2,
                 delay: 0.0045,
                 bypass: 0
             });


audioNode.connect(chorus.input);
chorus.connect(anotherNativeNode);

*/
