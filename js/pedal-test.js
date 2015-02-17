// Dependencies: Pedal.js from http://dashersw.github.io/pedalboard.js/

// initialize the stage and get the context
var stage = new pb.Stage();
var ctx = stage.getContext();

stage.play('audio/transition-test/acoustic.mp3');

// initialize the board and pedals
var board = new pb.Board(ctx);
var od = new pb.stomp.Overdrive(ctx);
var reverb = new pb.stomp.Reverb(ctx);
var vol = new pb.stomp.Volume(ctx);

// add pedals to board
board.addPedals([od, reverb]);
board.addPedalsAt(1, vol);

// tweak pedal settings
od.setDrive(0.0);
od.setLevel(0.0);
reverb.setLevel(1.0);
vol.setLevel(1.0);

// set the board on stage and start playing!
stage.setBoard(board);



// Later on, you can manually set a pot's value like
drivePot.setValue(0.3);



