function Menu(){
	MenuAnimation();
}
document.addEventListener("click",oncklick);
function oncklick(){
	state['menu'] = false;
	state['game'] = true;
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function MenuAnimation(){
	if(count >= 4){	
	ctx.drawImage(bg,0,0);
	ctx.drawImage(titleGame,52,90,200,80);
	
	if(i==4){ i = 1;}
	ctx.drawImage(bird[i],bx + 10,by + 85,bird_Wigth,bird_Height);
	i++;

	ctx.drawImage(fg[1],fgx[1],bg.height - fg[1].height);
	ctx.drawImage(fg[2],fgx[2],bg.height - fg[2].height);

	

	count = 0;
}
	count ++;
}