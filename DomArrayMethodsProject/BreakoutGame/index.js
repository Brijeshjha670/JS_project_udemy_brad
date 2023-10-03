const ruleBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
// Draw Ball , paddle, & score
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let score =0;

const brickRowCount =9;
const brickColumnCount =5;


// create ball props
const ball = {
    x:canvas.width/2,
    y:canvas.height/2,
    size:10,
    speed:4,
    dx:4,
    dy:-4
}


//create paddle props 
const paddle = {
    x:canvas.width/2 -40,
    y:canvas.height/2 -20,
    w:80,
    h:10,
    speed:8,
    dx:0
}


// Task:1-->
// Paint the pannel with bricks , paddle and the wall
function drawBall(){
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2); // Outer circle
    ctx.fillStyle = "#0095dd";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddle.x,paddle.y,paddle.w,paddle.h);
    ctx.fillStyle="#0095dd";
    ctx.fill();
    ctx.closePath();
}

// function to show score
function drawScore(){
    ctx.font = '20px Arial';
    ctx.fillText(`score:${score}`,canvas.width-100,30)
}

function draw(){
    drawBall();
    drawPaddle();
    drawScore();
}

draw();



// Rules and close handlers
ruleBtn.addEventListener('click',() => rules.classList.add('show'));
closeBtn.addEventListener('click',() => rules.classList.remove('show'));



















// Plan for game 
// 1.Create canvas context.
// 2.create and draw ball.
// 3.create and draw paddle.
//4.create bricks.
//5.Draw score.
//6.Add Update.() --animation --requestanimationframe(cl);
//7.Move Paddle.
//8.keboard event handlers to move paddle.
//9.Move ball.
//10.Add wall boundaries.
//11.Increase score when bricks break.
//12.Lose --redrawBricks,reset score.