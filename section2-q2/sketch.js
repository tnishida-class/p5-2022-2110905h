// チェッカー
function setup() {
  createCanvas(120, 120);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i + j) % 2 == 1){
      fill(150);
      }
      else{noFill();
      }
      rect(size * i, size * j ,15 , 15)// BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    
    
    if((i + j) % 2 == 1 && j<3){
      fill(255, 0, 0);
    }
    else if ((i + j) % 2 == 1 && j>4)
      fill(0);
    else{
      noFill();
    }
  
    circle(7.5 + 15 * i, 7.5 + 15 * j, 10)
}
}  
}
