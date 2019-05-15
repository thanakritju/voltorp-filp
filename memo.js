function Memo(){
	this.toggle=false;
	this.draw=function(){
		fill(255);
		rect(380,60,80,60);
	}
	this.drawtext=function(){
		if (this.toggle == true){
			fill(0);
			strokeWeight(1.5);
			textSize(20);
			text("MEMO",390,97);
    	} else {
			fill(100);
    		strokeWeight(1.5);
			textSize(20);
			text("MEMO",390,97);
    	}
	}
	this.showbutton=function(){
    	if (this.mouseInArea()){
			stroke(0);
			strokeWeight(4);
			fill(255,191,0);
			rect(380,60,80,60);
		} else {
			stroke(0);
			strokeWeight(4);
			this.draw()
		}
    	stroke(0);
		strokeWeight(1);
		this.drawtext();
		strokeWeight(1);
		if (this.mouseInArea && mouseIsPressed){
			this.toggle = !this.toggle
		}
	}
	this.mouseInArea =function(){
		if (mouseX>=380 && mouseX<=460 && mouseY>=60 && mouseY<=120){
			return true;
		} else{
			return false;
		}
	}
	

}