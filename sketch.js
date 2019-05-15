var cards=[[],[],[],[],[],[]];
var conditions=[[],[],[],[],[],[]];

function setup() {
	createCanvas(500, 500);
	background(200);
	for (var i=0;i<6;i++){
		for (var j=0;j<6;j++){
			cards[i][j] = new Card(50+j*50,60+75*i);
			conditions[i][j]=1;
			if(i==5 || j==5){
				cards[i][j].cardsValue=specialLoop(i,j).sum;
				cards[i][j].zeros=specialLoop(i,j).zeros;
			}
		}
	}
	memo=new Memo;

}

function draw() {
	background(200);
	memo.showbutton();
	for (var i=0;i<6;i++){
		for (var j=0;j<6;j++){
			if(i==5 || j==5){
				if (i==5 && j==5){
				} else {
					cards[i][j].showspecialcard();
				}
			} else{
				if (cards[i][j].mouseInArea() && mouseIsPressed){
					conditions[i][j]=0;
				}
				if(i<5 && j<5){
				cards[i][j].showtext();
				}
				if (conditions[i][j]==1){	
					cards[i][j].showcard();
				}	
			}	
		}
	}
	fill(0);
	textSize(20);
	text("Score:"+calScore(),300,480);
	//text(mouseX+","+mouseY,400,450);
	textSize(30);
	text("Voltorb Flip",180,30);
	if (calScore()==0){
		textSize(20);
		text("Game Over !!",350,380);
	} else if(isItWon()){
		text("You won !!",350,380);
	}
}

function calScore(){
	var score=1;
	for (var i=0;i<5;i++){
		for (var j=0;j<5;j++){
			if (conditions[i][j]==0){
				score=score*cards[i][j].value;
			}
		}
	}
	return score;
}

function specialLoop(ti,tj){
	var result={
		sum:0,
		zeros:0,
	}
	for (var i=0;i<5;i++){
		for (var j=0;j<5;j++){
			if (ti==5 && j==tj){
				if (cards[i][tj].value==0){
					result.zeros++;
				}
				result.sum += cards[i][tj].value;
			} else if(tj==5 && i==ti){
				if (cards[ti][j].value==0){
					result.zeros++;
				}
				result.sum += cards[ti][j].value;
			}
		}
	}
	return result;
}

function isItWon(){

	for (var i=0;i<5;i++){
		for (var j=0;j<5;j++){
			if (cards[i][j].value==2 || cards[i][j].value==3){
				if(conditions[i][j]==1){
					return false;
				}
			}
		}
	}
	return true;
}