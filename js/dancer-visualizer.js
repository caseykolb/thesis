// To enable flash fallback, specify the paths for the flashSWF and flashJS
  Dancer.setOptions({
    flashJS  : '../../lib/soundmanager2.js',
    flashSWF : '../../lib/soundmanager2.swf'
  });

  var
    audio  = document.getElementsByTagName('audio')[0],
    dancer = new Dancer(),
    kick = dancer.createKick({
      onKick: function ( mag ) {
        console.log('Kick!');
      },
      offKick: function ( mag ) {
        console.log('no kick :(');
      }
    });

  // Let's turn this kick on right away
  kick.on();

  dancer.onceAt( 10, function() {
    // Let's set up some things once at 10 seconds
  }).between( 10, 60, function() {
    // After 10s, let's do something on every frame for the first minute
  }).after( 60, function() {
    // After 60s, let's get this real and map a frequency to an object's y position
    // Note that the instance of dancer is bound to "this"
    object.y = this.getFrequency( 400 );
  }).onceAt( 120, function() {
    // After 120s, we'll turn the kick off as another object's y position is still being mapped from the previous "after" method
    kick.off();
  }).load( audio ); // And finally, lets pass in our Audio element to load

  dancer.play();