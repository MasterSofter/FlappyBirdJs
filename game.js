function Game(){
	if(count >= 2){
		
		if(life){
		  Gameloop();
		  Physics();
		}else{
			GameOver();		
			Physics();
		}
		count = 0;
	}
	count++;
	
	if(gravity == 0 && bangCount < 7){
		AnimationBang();
		j += 1;
	}
	
	
}

document.addEventListener("click",fly);

function fly(){
	F = 1005;
	t = 0;
}

function Gameloop(){
	ctx.drawImage(bg,0,0);
	
	if(fgx[1]+ fg[1].width <=0){
		fgx[1] = cvs.width;
	}
	if(fgx[2]+ fg[2].width <=0){
		fgx[2] = cvs.width;
	}
	
	if(fgx[2] - (fgx[1]+ fg[1].width) > 0){
		fgx[2] = fgx[1]+ fg[1].width;
	}
	if(fgx[1] - (fgx[2]+ fg[2].width) > 0){
		fgx[1] = fgx[2]+ fg[2].width;
	}
	if((pipeN_x[1] + 52) <= 0){
	pipeS_y[1] = getRandom(140, 330);
	pipeN_y[1] = pipeS_y[1] - dy - 242;
	pipeN_x[1] = pipeN_x[1] + 52*3 + dx*3;
	}
	
	if((pipeN_x[2] + 52) <= 0){
	pipeS_y[2] = getRandom(140, 330);
	pipeN_y[2] = pipeS_y[2] - dy - 242;
	pipeN_x[2] = pipeN_x[2] + 52*3 + dx*3;
	}
	
	if((pipeN_x[3] + 52) <= 0){
	pipeS_y[3] = getRandom(140, 330);
	pipeN_y[3] = pipeS_y[3] - dy - 242;
	pipeN_x[3] = pipeN_x[3] + 52*3 + dx*3;
	}

	ctx.drawImage(pipeNorth[1],pipeN_x[1], pipeN_y[1]);
	ctx.drawImage(pipeSouth[1],pipeN_x[1], pipeS_y[1]);
	
	ctx.drawImage(pipeNorth[2],pipeN_x[2], pipeN_y[2]);
	ctx.drawImage(pipeSouth[2],pipeN_x[2], pipeS_y[2]);
	
	ctx.drawImage(pipeNorth[3],pipeN_x[3], pipeN_y[3]);
	ctx.drawImage(pipeSouth[3],pipeN_x[3], pipeS_y[3]);
	
	ctx.drawImage(fg[1],fgx[1],bg.height - fg[1].height);
	ctx.drawImage(fg[2],fgx[2],bg.height - fg[2].height);
	
	Bird_Life();
	
	
	pipeN_x[1] -= 5;
	pipeN_x[2] -= 5;
	pipeN_x[3] -= 5;
	fgx[1] -= 5;
	fgx[2] -= 5;
	
	
}

function GameOver(){
	ctx.drawImage(bg,0,0);
if(gravity != 0){

	if(fgx[1]+ fg[1].width <=0){
		fgx[1] = cvs.width;
	}
	if(fgx[2]+ fg[2].width <=0){
		fgx[2] = cvs.width;
	}
	
	if(fgx[2] - (fgx[1]+ fg[1].width) > 0){
		fgx[2] = fgx[1]+ fg[1].width;
	}
	if(fgx[1] - (fgx[2]+ fg[2].width) > 0){
		fgx[1] = fgx[2]+ fg[2].width;
	}
	if((pipeN_x[1] + 52) <= 0){
	pipeS_y[1] = getRandom(140, 330);
	pipeN_y[1] = pipeS_y[1] - dy - 242;
	pipeN_x[1] = pipeN_x[1] + 52*3 + dx*3;
	}
	
	if((pipeN_x[2] + 52) <= 0){
	pipeS_y[2] = getRandom(140, 330);
	pipeN_y[2] = pipeS_y[2] - dy - 242;
	pipeN_x[2] = pipeN_x[2] + 52*3 + dx*3;
	}
	
	if((pipeN_x[3] + 52) <= 0){
	pipeS_y[3] = getRandom(140, 330);
	pipeN_y[3] = pipeS_y[3] - dy - 242;
	pipeN_x[3] = pipeN_x[3] + 52*3 + dx*3;
	}

	pipeN_x[1] -= 3;
	pipeN_x[2] -= 3;
	pipeN_x[3] -= 3;
	fgx[1] -= 3;
	fgx[2] -= 3;

}

	ctx.drawImage(pipeNorth[1],pipeN_x[1], pipeN_y[1]);
	ctx.drawImage(pipeSouth[1],pipeN_x[1], pipeS_y[1]);
	
	ctx.drawImage(pipeNorth[2],pipeN_x[2], pipeN_y[2]);
	ctx.drawImage(pipeSouth[2],pipeN_x[2], pipeS_y[2]);
	
	ctx.drawImage(pipeNorth[3],pipeN_x[3], pipeN_y[3]);
	ctx.drawImage(pipeSouth[3],pipeN_x[3], pipeS_y[3]);

	ctx.drawImage(fg[1],fgx[1],bg.height - fg[1].height);
	ctx.drawImage(fg[2],fgx[2],bg.height - fg[2].height);

	if(bangCount == 0){
		Bird_Die();
	}
}



function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/*
function sleep(milliseconds){
	var start = new Date().getTime();
	for(var i = 0; i< 1e7; i++){
		if((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}

function getMousePosition(e){
    if (!e){
        var e = window.event;
    } 
    if (e.pageX || e.pageY){
        return new vector2d(e.pageX, e.pageY);
	}
}
*/