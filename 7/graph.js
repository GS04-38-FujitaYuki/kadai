var $script= $('#script');
var diff = JSON.parse($script.attr('data-diff'));
var game = JSON.parse($script.attr('data-game'));
var bonus = JSON.parse($script.attr('data-bonus'));

var canvas = document.getElementById('canvas');
var diffArray = diff.split(",");
var gameArray = game.split(",");
var ctx = canvas.getContext('2d');
var originX = canvas.width*0.1;
var originY = canvas.height*0.5;
var radius = 2;
for(var i =0; i<diffArray.length; i++){
    diffArray[i] = Number(diffArray[i]);
    gameArray[i] = Number(gameArray[i]);
}
for(var i =0; i<diffArray.length; i++){
    console.log(diffArray[i]);
}
for(var i =0; i<diffArray.length; i++){
    console.log(gameArray[i]);
}
console.log(bonus);

// console.log(originX+gameArray[1]);
// console.log(originX);
// console.log(originY);

ctx.beginPath();
ctx.fillStyle ="#fff";
ctx.fillRect(canvas.width*0.1,canvas.height*0.05, 1,canvas.height*0.9);
ctx.fillRect(canvas.width*0.025,canvas.height*0.5, canvas.width*0.95,1);
ctx.fill();

for(var i=0 ; i < gameArray.length ; i++){
    ctx.beginPath();
    ctx.fillStyle ="#0ff";
    ctx.arc(originX+gameArray[i],originY-diffArray[i],radius,0,2*Math.PI,true);
    ctx.fill();
}

//(originX+gameArray[i]),(originY+diffArray[i])
