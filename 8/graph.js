var $script= $('#script');
var diff = JSON.parse($script.attr('data-diff'));
var game = JSON.parse($script.attr('data-game'));
var bonus = JSON.parse($script.attr('data-bonus'));

var canvas = document.getElementById('canvas');
// var diff = diff.split(",");
// var game = game.split(",");
var ctx = canvas.getContext('2d');
var originX = canvas.width*0.1;
var originY = canvas.height*0.5;
var radius = 2;
var diffBack=0;
var gameBack=0;
var bonBack=0;

function render(){
    var f = document.getElementById('back');
    document.getElementById('diffBack').value=diffBack;
    document.getElementById('gameBack').value=gameBack;
    document.getElementById('bonBack').value=bonBack;
    f.submit();
}
var backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click',function(){
    render();
});


// for(var i =0; i<diff.length; i++){
//     diff[i] = Number(diff[i]);
//     game[i] = Number(game[i]);
// }
// for(var i =0; i<diff.length; i++){
//     console.log(diff[i]);
// }
// for(var i =0; i<diff.length; i++){
//     console.log(game[i]);
// }
console.log(game);
console.log(diff);
console.log(bonus);



// console.log(originX+game[1]);
// console.log(originX);
// console.log(originY);

ctx.beginPath();
ctx.fillStyle ="#fff";
ctx.fillRect(canvas.width*0.1,canvas.height*0.05, 1,canvas.height*0.9);
ctx.fillRect(canvas.width*0.025,canvas.height*0.5, canvas.width*0.95,1);
ctx.fill();

for(var i=0 ; i < game.length ; i++){
    ctx.beginPath();
    ctx.fillStyle ="#0ff";
    ctx.arc(originX+game[i],originY-diff[i],radius,0,2*Math.PI,true);
    ctx.fill();
}

//(originX+game[i]),(originY+diff[i])
