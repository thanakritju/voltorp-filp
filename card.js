function Card(x,y){
	this.pos = createVector(x,y);
	//this.value = Math.floor(random(1)*4);
	this.value = [1,1,1,0,0,2,3][Math.floor(Math.random()*7)];
	// for special cards
	this.cardsValue =0;
	this.zeros=0;

	this.showcard=function(){
		if (this.mouseInArea()){
			fill(255,191,0);
		} else {
			fill(0,191,255);
		}
		rect(this.pos.x,this.pos.y,32,60);
	}

	this.showspecialcard=function(){
		fill(255);
		rect(this.pos.x,this.pos.y,32,60);
		fill(0);
		textSize(15);
		text(this.cardsValue,this.pos.x+12,this.pos.y+20);
		fill(255,100,100);
		text(this.zeros,this.pos.x+12,this.pos.y+50);
	}

	this.showtext=function(){
		fill(0);
		textSize(25);
		text(this.value,this.pos.x+11,this.pos.y+35);
	}

	this.mouseInArea =function(){
		if (mouseX>=this.pos.x && mouseX<=this.pos.x+30 && mouseY>=this.pos.y && mouseY<=this.pos.y+50){
			return true;
		} else{
			return false;
		}
	}
	this.randomvalue =function(){
		var values=[1,1,1,0,2,3]
		var nv =values.length
		return values[Math.floor(Math.random()*nv)];
	}
}

