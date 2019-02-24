var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

var bg = new Image();
var fg = {};

var t = 0;
fg[1] = new Image();
fg[2] = new Image();

var pipeNorth = {};
var pipeSouth = {};

var fgx = {};
fgx[1] = 0;
fgx[2] = cvs.width;



var b_die = new Image();
b_die.src="database/b2_die.png";

var bang = {};
bang[1] = new Image();
bang[2] = new Image();
bang[3] = new Image();
bang[4] = new Image();
bang[5] = new Image();
bang[6] = new Image();

var bird = {};
bird[1] = new Image();
bird[2] = new Image();
bird[3] = new Image();
pipeNorth[1] = new Image(); 
pipeNorth[2] = new Image();
pipeNorth[3] = new Image();
pipeSouth[1] = new Image();
pipeSouth[2] = new Image();
pipeSouth[3] = new Image();

var titleGame = new Image();
titleGame.src = "database/title.png";

var pipeS_y = {};
var pipeN_x = {};
var pipeN_y = {};
pipeS_y[1] = 512;
pipeS_y[2] = 512;
pipeS_y[3] = 512;

pipeN_y[1] = -512;
pipeN_y[2] = -512;
pipeN_y[3] = -512;
var dy = 88;
var dx = 172;
pipeN_x[1] = 288;
pipeN_x[2] = pipeN_x[1] + 52 + dx;
pipeN_x[3] = pipeN_x[1] + 52 + dx + 52 + dx;




bg.src = "database/bg.png";
fg[1].src = "database/fg.png";
fg[2].src = "database/fg.png";
bird[1].src = "database/b1.png";
bird[2].src = "database/b2.png";
bird[3].src = "database/b3.png";
bang[1].src = "database/bang_b1.png";
bang[2].src = "database/bang_b2.png";
bang[3].src = "database/bang_b3.png";
bang[4].src = "database/bang_b4.png";
bang[5].src = "database/bang_b5.png";
bang[6].src = "database/bang_b6.png";
pipeNorth[1].src = "database/pipeNorth.png";
pipeNorth[2].src = "database/pipeNorth.png";
pipeNorth[3].src = "database/pipeNorth.png";
pipeSouth[1].src = "database/pipeSouth.png";
pipeSouth[2].src = "database/pipeSouth.png";
pipeSouth[3].src = "database/pipeSouth.png";

var i = 1;
var j = 1;
var bird_Wigth = 46;
var bird_Height = 34;
var count = 0;
var bangCount = 0;

var gravity = 5.2;
var velocity_y = 0;
var bx = 228/2;
var by = 150;
var a = 0;
var F = 0;
var m = 0.5;
var life = true;


var state = {
		'menu' : true,
		'game' : false,
		'gameover' : false
	};
var stateName = {};
	stateName[0] = "menu";
	stateName[1] = "game";
	stateName[2] = "gameover";