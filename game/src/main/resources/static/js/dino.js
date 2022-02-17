const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let score = document.getElementById('now_score');
var 점프중 = false;
var 게임시작 = true;
var 게임진행 = false;
document.addEventListener('keydown', function(e){
  if(e.code === 'Space'){
    if(게임진행 == true){
      if(점프timer == 0){
        점프중 = true;
      }
    }else{
      게임진행 = true;
      timer = 0;
      cactus여러개 = [];
      cloud여러개 = [];
      점프timer = 0;
      속도 = 5;
      구름속도 = 2;
      장애물설치 = 100;
      구름설치 = 180;
      random = 0;
      dino.x = 100;
      dino.y = 200;
      score.value = 0;
      프레임마다실행();
    }

  }
});

canvas.width = 1000;
canvas.height = 500;

var 점수 = {
  x : 870,
  y : 20,
  draw(){
    ctx.font = "17pt Fira";
    ctx.fillStyle = 'black';
    ctx.fillText("점수 : "+timer,this.x,this.y);
  }
}
var 게임시작 = {
  x : 400,
  y : 150,
  draw(){
    ctx.font = "17pt Fira";
    ctx.fillStyle = 'black';
    ctx.fillText("스페이스바를 누르면 게임시작",this.x,this.y);
  }
}

var 게임종료 = {
  x : 500,
  y : 150,
  draw(){
    ctx.font = "17pt Fira";
    ctx.fillStyle = 'black';
    ctx.fillText("게임종료",this.x,this.y);
  }
}

var 재시작 = {
  x : 420,
  y : 180,
  draw(){
    ctx.font = "14pt Fira";
    ctx.fillStyle = 'black';
    ctx.fillText("스페이스바를 누르면 재시작",this.x,this.y);
  }
}

var img1 = new Image();
img1.src = '../image/dino.PNG';

var dino = {
  x : 100,
  y : 200,
  width : 25,
  height : 45,
  draw(){
    //ctx.fillStyle = 'green';
    //ctx.fillRect(this.x , this.y, this.width, this.height);
    ctx.drawImage(img1, this.x-5,this.y+4);
  }
}

var line = {
  x : 0,
  y : 250,
  width : 1000,
  height : 1,
  draw(){
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x , this.y, this.width, this.height);
  }
}

var 구름 = new Image();
구름.src = '../image/구름.PNG';


class Cloud{
  constructor(y){
    this.x = 1000;
    this.y = y;
    this.width = 100;
    this.height = 50;
  }

  draw(){
    ctx.drawImage(구름, this.x,this.y);
  }
}



var cac = new Image();
cac.src = '../image/선인장1.PNG';


class Cactus{
  constructor(){
    this.x = 1000;
    this.y = 200;
    this.width = 25;
    this.height = 50;
  }
  draw(){
    //ctx.fillStyle = 'red';
    //ctx.fillRect(this.x , this.y, this.width, this.height);
    ctx.drawImage(cac, this.x,this.y);
  }
}

var cac2 = new Image();
cac2.src = '../image/선인장2.PNG';

class Cactus2{
  constructor(){
    this.x = 1000;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw(){
    //ctx.fillStyle = 'blue';
    //ctx.fillRect(this.x , this.y, this.width, this.height);
    ctx.drawImage(cac2, this.x,this.y);
  }
}

var cac3 = new Image();
cac3.src = '../image/선인장3.PNG';

class Cactus3{
  constructor(){
    this.x = 1000;
    this.y = 200;
    this.width = 75;
    this.height = 50;
  }
  draw(){
    //ctx.fillStyle = 'black';
    //ctx.fillRect(this.x , this.y, this.width, this.height);
    ctx.drawImage(cac3, this.x,this.y);
  }
}


var timer = 0;
var cactus여러개 = [];
var cloud여러개 = [];
var 점프timer = 0;
var animation;
var 속도 = 5;
var 구름속도 = 2;
var 장애물설치 = 100;
var 구름설치 = 180;
var random = 0;

function 프레임마다실행(){
  animation = requestAnimationFrame(프레임마다실행);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  게임시작전();
  timer++;
  // 일정 프레임마다 장애물 생성

  if(timer % 구름설치 === 0){
    var cloud = new Cloud(random = randomNum(10,120));
    cloud여러개.push(cloud);
    cloud.draw();
  }

  if(timer % 장애물설치 === 0){
    random = randomNum(1,3);

    if(random == 1){
      var cactus = new Cactus();
      cactus여러개.push(cactus);
      cactus.draw();
    }else if(random == 2){
      var cactus2 = new Cactus2();
      cactus여러개.push(cactus2);
      cactus2.draw();
    }else{
      var cactus3 = new Cactus3();
      cactus여러개.push(cactus3);
      cactus3.draw();
    }

  }

  cactus여러개.forEach((a, i, o)=>{
    //x좌표가 0미만이면 제거

    if(a.x+a.width<0){
      o.splice(i, 1)
    }

    a.x -= 속도;

    if(timer % 20 === 0){
      속도 += 0.05;
      구름속도 += 0.02;
    }
    if(timer % 150 === 0){
      if(장애물설치>65){
        장애물설치 -= 1;
        구름설치 -= 1;
      }
    }
    충돌(dino, a);
    a.draw();
  })

  cloud여러개.forEach((a, i, o)=>{
    //x좌표가 0미만이면 제거
    if(a.x+a.width<0){
      o.splice(i, 1)
    }
    a.x -= 구름속도;
    a.draw();
  })

  if(점프중 == true){
    dino.y -= 5.5;
    점프timer++;
  }

  if(점프중 == false){
    if(dino.y < 200){
      dino.y += 5.5;
      점프timer --;
    }

  }

  if(점프timer > 22){
    점프중 = false;
  }

  점수.draw();
  dino.draw();
  line.draw();

}

프레임마다실행();


function 게임시작전(){
  if(게임진행 == false){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    cancelAnimationFrame(animation);
    게임시작.draw();
    line.draw();
    dino.draw();
    
  }
}

// 충돌확인
function 충돌(dino, cactus){
  var x축차이 = cactus.x - (dino.x+dino.width);
  var y축차이 = cactus.y - (dino.y+dino.height);
  var 넘어감 = cactus.x+cactus.width - dino.x;

  if(넘어감 < 0 && y축차이 < 0){
    // 장애물 넘어가서 y축차이가 0아래로 내려가도 정상 실행
  }else if(x축차이 < 0 && y축차이 < 0){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    cancelAnimationFrame(animation);
    게임진행 = false;
    재시작.draw();
    게임종료.draw();
    score.value = timer;
  }

}

function randomNum(min, max){
  var randNum = Math.floor(Math.random()*(max-min+1)) + min;
  return randNum;
}
