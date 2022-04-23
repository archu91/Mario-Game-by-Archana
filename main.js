var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var w = canvas.width;
var h = canvas.height;

var bg = new Image()
bg.src = "images/bg.png"
var bgX = 0;

var marioBGM = new Audio("SuperMarioBros.mp3");
var gameOverBGM = new Audio("GameOver.mp3");
var wonBGM = new Audio("Won.mp3")
var coinSound = new Audio("coin.mp3")
var ouch = new Audio("ouch.mp3")
var lifeUp = new Audio("1up.mp3")

var life = 3;
var score = 0;
var time = 30;
var timeLeft;
var mario = new Image()
var mario_images = []

for(var i=1; i<=4; i++) {
    for(j=0; j<8; j++) { 
        var name = "images/m" + i + ".png"
        mario_images.push(name)
    }
}
for(var i=4; i>=1; i--) {
    for(j=0; j<8; j++) { 
        var name = "images/m" + i + ".png"
        mario_images.push(name)
    }
}
var marioImg = 0
mario.src = mario_images[marioImg]
var marioX = 50, marioY = h-160;
var marioH = 100;

var superMario = new Image()
superMario.src = "images/superMario.png"
var bush1 = new Image()
bush1.src = "images/b1.png"
var bush2 = new Image()
bush2.src = "images/b2.png"
var pipe = new Image()
pipe.src = "images/p1.png"
var playBtn = new Image()
playBtn.src = "images/play.png"
var restart = new Image()
restart.src = "images/restart.png"
var playClicked;
var x,y;
var btnClicked = true

function wait() {
    marioBGM.play()
    ctx.drawImage(bg, 0, 0 ,w, h)
    ctx.drawImage(mario, marioX ,marioY, 50,marioH)
    ctx.drawImage(superMario, w/4 ,20, w/2,h/3)
    ctx.drawImage(playBtn, w/3+40 ,130, 120,90)
    ctx.drawImage(bush1, w-100 ,h-108, 80,50)
    ctx.drawImage(bush2, 100 ,h-108, 120,50)
    ctx.drawImage(pipe, w/2-80,h-157, 50,100)
    ctx.font="bold 20px fantacy";
    ctx.fillText("Developer: Archana S", w-200, 25)
    playBtnClicked = canvas.addEventListener("click", playClicked)
}
function playClicked(event) {
    x = event.pageX;
    y = event.pageY;
    if(x>=292 && x<=357 && y>=156 && y<=211 && btnClicked) {
        btnClicked = false
        start();
        playClicked.removeEventListener("click", clicked, true);    
    }
}


marioBGM.oncanplaythrough = bg.onload = playBtn.onload  = wait

function start() {
    var turtle = new Image();
var turtleImages = ["images/t1.png", "images/t2.png"]
for(var i=1; i<=2; i++) {
    for(j=0; j<20; j++) { 
        var name = "images/t" + i + ".png"
        turtleImages.push(name)
    }
}
for(var i=2; i<=1; i--) {
    for(j=0; j<20; j++) { 
        var name = "images/t" + i + ".png"
        turtleImages.push(name)
    }
}
var turtleImg = 0
turtle.src = turtleImages[turtleImg]
var turtleX = w-100, turtleY = h-110;


var enemy = new Image();
var enemyImages = ["images/e1.png", "images/e2.png", "images/e3.png"]
for(var i=1; i<=3; i++) {
    for(j=0; j<20; j++) { 
        var name = "images/e" + i + ".png"
        enemyImages.push(name)
    }
}
for(var i=3; i<=1; i--) {
    for(j=0; j<20; j++) { 
        var name = "images/e" + i + ".png"
        enemyImages.push(name)
    }
}
var enemyImg = 0
enemy.src = enemyImages[enemyImg]
var enemyX = w-120, enemyY = h-110;


var flower = new Image();
var flowerImages = ["images/f1.png", "images/f2.png", "images/f3.png"]
for(var i=1; i<=3; i++) {
    for(j=0; j<20; j++) { 
        var name = "images/f" + i + ".png"
        flowerImages.push(name)
    }
}
for(var i=3; i<=1; i--) {
    for(j=0; j<20; j++) { 
        var name = "images/f" + i + ".png"
        flowerImages.push(name)
    }
}
var flowerImg = 0
flower.src = flowerImages[flowerImg]
var flowerX = w/2+2, flowerY = h-215;

var coin = new Image()
var coinImages = ["images/mo1.png", "images/mo2.png", "images/mo3.png"]

for(var i=1; i<=3; i++) {
    for(j=0; j<10; j++) { 
        var name = "images/mo" + i + ".png"
        coinImages.push(name)
    }
}
for(var i=3; i<=1; i--) {
    for(j=0; j<10; j++) { 
        var name = "images/mo" + i + ".png"
        coinImages.push(name)
    }
}

var coinImg = 0
coin.src = coinImages[coinImg]
var min = w/4
var max = w-100
var coinX = (Math.random()*(max-min+1))+ min;
var coinY = Math.random()*(100);

var mushroom = new Image()
mushroom.src = "images/mushroom.png"
var mX = coinX, mY = coinY, mush = true;
var win = new Image()
win.src= "images/won.gif"
var over = new Image()
over.src= "images/over.png"
var princess = new Image()
princess.src = "images/princess.png"

document.addEventListener("keydown", moveMario)

function moveMario(event) {
    var posX = marioX, posY = marioY;
    if(event.keyCode == 32 && marioY >= h-250) {
        marioY -= 150
    }
    if(event.keyCode == 37) {
        marioX -= 10
    }
    if(event.keyCode == 39) {
        marioX += 10
    }
    
    var mW = 25, mH = marioH/2;
    if(marioX<0-mW || marioX>w-mW || marioY<0-mH || marioY>h-mh) {
          marioX = posX;
          marioY = posY;
    }
}

function update(){
    bgX -= 1
    if(bgX < -w/4) {
        bgX = 0
    }
    
    marioImg += 1
    if(marioImg === 32) {
        marioImg = 0
    }  
    marioY += 5
    if (marioY > h-160 && marioH==100) {
        marioY = h-160;
    }
    if (marioY > h-130 && marioH==70) {
        marioY = h-130;
    } 
    if (marioY > h-100 && marioH==40) {
        marioY = h-100;
    } 
    mario.src = mario_images[marioImg]
    
    turtleImg += 1
    if(turtleImg >= 40) {
        turtleImg = 0
    }
    turtle.src = turtleImages[turtleImg]
    
    turtleX -= 3
    if(turtleX<=0) {
        turtleX = w*3
    }
    if(turtleX === w*1.5){
        turtleX = w-80;
        coinX = (Math.random()*(max-min+1))+ min;
        coinY = Math.random()*(100);
    }

    enemyImg += 1
    if(enemyImg >= 40) {
        enemyImg = 0
    }
    enemy.src = enemyImages[enemyImg]
    
    enemyX -= 2
    if(enemyX<=0) {
        enemyX = w*2
    }
    if(enemyX === w*1.5){
        enemyX = w-100;
    }

    flowerImg += 1
    if(flowerImg >= 40) {
        flowerImg = 0
    }
    flower.src = flowerImages[flowerImg]
        
    coinImg += 1;
    if(coinImg >= 30) {
        coinImg = 0
    }
    coin.src = coinImages[coinImg]
    coinX -= 1

    if(timeLeft <= 0) {
        gameOver("Time's Up!", "red")
    }
    
    //collision detection with enemies
    turtle_coll = (Math.abs(marioX-turtleX) <= 25 && Math.abs(marioY-turtleY) <= 50)
    enemy_coll = (Math.abs(marioX-enemyX) <= 25 && Math.abs(marioY-enemyY) <= 50) 
    flower_coll = (Math.abs(marioX-flowerX) <= 25 && Math.abs(marioY-flowerY) <= 50)
    if( turtle_coll || enemy_coll || flower_coll ){
        ouch.play()
        if(turtle_coll) {
            turtleX = w*3
        }
        else if(enemy_coll) {
            enemyX = w*2
        }
        else if(flower_coll) {
            flowerY = -100
            setTimeout(() => {
                flowerY = h-215
            }, 3000);
        }
        
        life -= 1
        marioH -= 30 
        marioY += 30
        if (life<=0) {
            setTimeout(() => {
                gameOver("Uh - Oh!", "red")
            }, 1500); 
        }        
      }
    //collision detection with coin
    if(Math.abs(marioX-coinX) <= 25 &&
      Math.abs(marioY-coinY) <= 30) {
        coinSound.play()
        coinX = (Math.random()*(max-min+1))+ min;
        score += 10       
      }
    if(n/100>=10 && n/100 <=20) {
        ctx.drawImage(mushroom, mX , mY, 40,40)
        // collect mushroom
        if(Math.abs(marioX-mX) <= 45 &&
           Math.abs(marioY-mY) <= 70 && mush) {
            lifeUp.play()
            life += 1
            mushroom.src = ""
            score += 100
            marioH = 100
            marioY = h-160  
            mush = false;
      }
    }

    if(n/100 >= 20) {      
        var pX, pY = h-175
        pX = (w/2)+80
        ctx.drawImage(princess, pX , pY, 80,120)
        // touch princess
        if(Math.abs(marioX-pX) <= 65 &&
           Math.abs(marioY-pY) <= 60+(marioH/2) ) {
            gameOver("CONGRATS!", "green")
      }
    }
    
}
var n = 1
function draw(){
    ctx.drawImage(bg, bgX, 0 ,w+150, h)
    ctx.drawImage(bush1, w-170 ,h-108, 80,50)
    ctx.drawImage(bush2, 100 ,h-108, 120,50)
    ctx.drawImage(pipe, w/2,h-167, 50,110)
    ctx.drawImage(mario, marioX ,marioY, 50,marioH)
    ctx.drawImage(turtle, turtleX ,turtleY, 50,50)
    ctx.drawImage(enemy, enemyX ,enemyY, 50,50)
    ctx.drawImage(flower, flowerX ,flowerY, 50,50)
    ctx.drawImage(coin, coinX ,coinY, 30,30)
    ctx.font = "bold 25px fantacy"
    ctx.fillText("Life: " + life, w/2-100,30)
    ctx.fillText("Score: " + score, w/2+10,30)
    n++;
    timeLeft = Math.round(time-n/100)
    ctx.fillText("Time Left : " + timeLeft , w/3+20, 60)
    update()
}

bg.onload = draw

interval = setInterval(draw, 30)

function gameOver(msg, colour){
    clearInterval(interval);
    marioBGM.pause()
    ctx.drawImage(bg, 0, 0 ,w, h)
    ctx.drawImage(bush1, w-100 ,h-108, 80,50)
    ctx.drawImage(bush2, 100 ,h-108, 120,50)
    ctx.drawImage(pipe, w/2-80,h-157, 50,100)   
    ctx.drawImage(restart, w/3+80 ,130, 50,50)
    canvas.addEventListener("click", (event)=> {
        console.log(event.pageX, event.pageY)
        x = event.pageX;
        y = event.pageY;
        if(x>=307 && x<=342 && y>=136 && y<=177 ) {
            location.reload()
        }
    })
    if(colour === "green") {
      wonBGM.play()
      ctx.drawImage(win, w/4+60, h/4-80)
      ctx.drawImage(princess,(w/2)+50,h-175, 80,120)
      ctx.drawImage(mario,w/2,h-160, 50,100)
        
    }
    else if(colour === "red") {
        gameOverBGM.play()
        ctx.drawImage(over, w/4-30, h/4-30)
    }
    ctx.fillStyle = colour;
    ctx.font="bold 30px fantacy";
    ctx.fillText(msg, w/3+45, 30);
    ctx.fillStyle = "black";
    ctx.font = "bold 25px fantacy";
    ctx.fillText("Life: " + life, 10,30);
    ctx.fillText("Score: " + score, 100,30);
    ctx.fillText("Time Left : " + timeLeft , 10, 60);
}
}
