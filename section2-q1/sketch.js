// 小手調べ
function setup(){
  createCanvas(300,300);
  background(300);
  noStroke();
  for(let i = 11; i > 0 ; i--){
    ellipse(100,100,i * 10 );
    if(i<7){
      stroke(0 ,0 , 255);
  }
    else{
      stroke(255, 0, 0);
  }
}
}
