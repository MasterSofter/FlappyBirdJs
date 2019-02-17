

function Bird_Life(){
	if(i==4){ i = 1;}
	ctx.drawImage(bird[i],bx,by,bird_Wigth,bird_Height);
	i++;
}

function Physics(){
	a = (m*gravity - F)/m;
	velocity_y = a * t; 
	by = by + velocity_y * 0.2 + (a * 0.2 * 0.2)/2;
	t += 0.2;
	F = 0;
if(life == true){	
	//проверка касания земли
	if(by + bird_Height >= bg.height - fg[1].height){
		life = false;
		fly();
	}

	
	for(var i = 1; i < 4; i++){
		//проверка пересечения с нижней коробкой
		if(by + bird_Height >= pipeS_y[i]){
			//1
			if(bx + bird_Wigth <= pipeN_x[i] + 52 && bx + bird_Wigth >= pipeN_x[i]){
				life = false;
				fly();
			}
			else //2
				if(bx >= pipeN_x[i] && bx <= pipeN_x[i] + 52){
					life = false;
					fly();
				}
				
		}


		//проверка пересечения с верхней коробкой
		if(by <= pipeN_y[i] + 242){
			if(bx + bird_Wigth <= pipeN_x[i] + 52 && bx + bird_Wigth >= pipeN_x[i]){
				life = false;
				fly();
			}
			else //2
				if(bx >= pipeN_x[i] && bx <= pipeN_x[i] + 52){
					life = false;
					fly();
				}
		}
	}

}
else{ //если птичка мертва и упала в последний раз
	if(by + bird_Height >= bg.height - fg[1].height){
		gravity = 0;
	}
}
}

//анимация смерти птички
Bird_Die = function(){
	ctx.drawImage(b_die,bx,by,bird_Wigth,bird_Height);
}

function AnimationBang(){
	ctx.drawImage(bang[j],bx - 12,by - 20,bird_Wigth + 25,bird_Height+25);
	bangCount += 1;
	sleep(60);
}



function sleep(milliseconds){
	var start = new Date().getTime();
	for(var i = 0; i< 1e7; i++){
		if((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}


