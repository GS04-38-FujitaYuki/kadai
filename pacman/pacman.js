var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');

    //  console.log(ctx.clearRect);
    var countL = 0;
    var countR = 0;
    var countU = 0;
    var countD = 0;
    var countE = 0;
    var w = canvas.width;
    var h = canvas.height;
    var x = 200;
    var y = 200;
    var kx = Math.floor( x / radius*2 );
    var ky = Math.floor( y / radius*2 );
    var mx = 50;
    var my = 50;
    // var kbx = 200;
    // var kby =200;
    var radius =20;
    var pacman;
    var pushLeft = false;
    var pushRight = false;
    var pushUp = false;
    var pushDown = false;
    var i=0;
    var j=0;
    var d=0;
    var score =0;
    var wx = i*30;
    var wy = j*30;
    //ボール（粒子）の位置座標
    // var bx = 250;
    // var by = 250;
    // var mbx = 30;
    // var mby = 30;
    // var speedX = 1;
    // var speedY = 1;
    var hp =5;
    var speed =5;
    var map = new Array();
    var feed;
    var radt_v = 270;
    var radb_v = 90;
    var radr_h = 0;
    var radl_h = 180;
    var radt_v2 = 270;
    var radb_v2 = 90;
    var radr_h2 = 0;
    var radl_h2 = 180;

    var rtv_defalt = 270;
    var rbv_defalt= 90;
    var rrh_defalt = 0;
    var rlh_defalt = 180;
    var rtv2_defalt = 270;
    var rbv2_defalt = 90;
    var rrh2_defalt = 0;
    var rlh2_defalt = 180;

    var offset = 0;
    var frame = 270;
    var result = 0;
    var ran = [];
    for(i=0; i <100; i++){
        ran[i] = Math.floor( Math.random() * 3 ) ;
    }
    var isGaming = true;
    var map =[];
    var dir = 0;
    // for(i=0 ; i < 15 ; i++){
    //     map [i] = new  Array();
    // }
    var isSending =false;
    var map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
     ];
     var mapX=map.length;
     var mapY=map[0].length;
     console.log('x:'+mapX);
     console.log('y:'+mapY);

     //各キーダウン時に各方向の変数をtrueにする
     document.onkeydown = function (e){
        switch (e.keyCode) {
            case 39:
            case 221:
                pushUp = false;
                pushDown = false;
                pushLeft = false;
                pushRight = true;
                // if(pushLeft){
                //     if(count%10==0||
                //         count%10==1||
                //         count%10==2||
                //         count%10==3||
                //         count%10==4
                //     ){
                //         ctx.beginPath();
                //         ctx.fillStyle = "rgba(255,255,32,1)";
                //         radl_h= 240;
                //         radl_h2=120;
                //         ctx.arc(x,y,radius,radr_h* Math.PI/180,radl_h* Math.PI/180,true);
                //             ctx.arc(x,y,radius,radr_h2* Math.PI/180,radl_h2* Math.PI/180,false);
                //             ctx.fill();
                //     }
                //     else{
                        ctx.beginPath();
                        ctx.fillStyle = "rgba(255,255,32,1)";
                        radl_h= 180;
                        radl_h2=180;
                        ctx.arc(x,y,radius,radr_h* Math.PI/180,radl_h* Math.PI/180,true);
                        ctx.arc(x,y,radius,radr_h2* Math.PI/180,radl_h2* Math.PI/180,false);
                        ctx.fill();
                    }
                }
                break;
            case 37:
            case 186:
                pushUp = false;
                pushDown = false;
                pushRight = false;
                pushLeft = true;
                break;
            case 38:
            case 219:
                pushRight = false;
                pushDown = false;
                pushLeft = false;
                pushUp = true;
                break;
            case 40:
            case 189:
                pushUp = false;
                pushRight = false;
                pushLeft = false;
                pushDown = true;
                break;
            default:
        }
        //console.log(e.keyCode);
     };
      //各キーアップ時に各方向の変数をfalseにする
    //  document.onkeyup = function (e){
    //     switch (e.keyCode) {
    //         case 39:
    //         case 221:
    //             pushRight = false;
    //             break;
    //         case 37:
    //         case 186:
    //             pushLeft = false;
    //             break;
    //         case 38:
    //         case 219:
    //             pushUp = false;
    //             break;
    //         case 40:
    //         case 189:
    //             pushDown = false;
    //             break;
    //         default:
    //     }
    //     //console.log(e.keyCode);
    // };
    //console.log(canvas);
    function dataSend(){
        if(isGaming==false&&isSending==false){
            getResult();
            isSending = true;
        }
    }
    var requestAnimationFrame = ( function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function( callback ){
                window.setTimeout( callback, 1000.0 / 60.0 );
            };
        } )();

        // //口を開けたパックマン
        // (function pacOpen(){
        //     requestAnimationFrame = (pacOpen);
        //     ctx.fillStyle = "rgba(255,255,32,0.8)";
        //     ctx.beginPath();
        //     ctx.arc(70,70,radius,270/180*Math.PI,90/180*Math.PI,false);
        //     //ctx.rotate(20/180*Math.PI);
        //     ctx.stroke();
        // })();
        //マップを描画
        function mapView(){
            for( i = 0 ; i < mapX ; i++ ){
                for( j = 0 ; j <mapY ; j++){
                    if(map[i][j]==1){
                        var image = document.getElementById("wr_logo");
                        var pattern = ctx.createPattern(image,"repeat");
                        ctx.beginPath();
                        ctx.fillStyle = pattern;
                        ctx.rect(i*(radius*2),j*(radius*2), radius*2, radius*2);
                        ctx.fill();
                    }
                }
            }
            //ctx.fillRect(40, 40, 80, 40);
            //HPゲージを描画
            for(i=1 ; i < hp ; i++){
                ctx.beginPath();
                ctx.fillStyle = "rgba(255,0,0,1)";
                ctx.fillRect(1200,30*i,30,25);
                ctx.fill();
            }
        }
        function Enemy(bx,by){
            this.dir=Math.floor(Math.random()*4);
            this.speedX=5;
            this.speedY=5;
            this.bx = bx;
            this.by = by;
            this.mbx=this.bx;
            this.mby=this.by;
            this.kbx = Math.floor( this.bx / (radius*2) );
            this.kby = Math.floor( this.by / (radius*2) );
            this.countE=0;
            this.move = function(){
                this.kbx = Math.floor( this.bx / (radius*2) );
                this.kby = Math.floor( this.by / (radius*2) );
                this.mbx=this.bx;
                this.mby=this.by;
                var audios = {"damage": new Audio("bgm/damage.mp3")};
                for(var i in audios){
                    audios[i].load();
                }
                // console.log(map[this.kbx+1][this.kby] == 1);
                this.countE++;
                    if(this.dir==0){
                        this.bx = this.bx+this.speedX;
                        if (
                        map[this.kbx+1][this.kby] == 1&& (this.kbx+1)*(radius*2) < this.bx +radius  ||
                        map[this.kbx+1][this.kby-1] ==1&&(this.kbx+1)*(radius*2) < this.bx +radius&&this.kby*(radius*2)+(radius-4)>this.by ||
                        map[this.kbx+1][this.kby+1] ==1&&(this.kbx+1)*(radius*2) < this.bx +radius&&this.kby*(radius*2)+(radius+4)<this.by)
                        {
                            this.bx = this.mbx;
                            this.ran_d =Math.floor(Math.random()*3);
                            if(this.ran_d == 0){this.dir=1;}
                            else if(this.ran_d == 1){this.dir=2;}
                            else if(this.ran_d == 2){this.dir=3;}
                        }
                    if(this.bx>=(ctx.canvas.width)-(radius*2+5)){
                        this.bx=0;
                    }
                }
                if(this.dir==1){
                    this.by = this.by+this.speedY;
                    if(
                        map[this.kbx][this.kby+1] == 1 && (this.kby+1)*(radius*2) < this.by +radius ||
                        map[this.kbx-1][this.kby+1] ==1&&(this.kby+1)*(radius*2) < this.by +radius&&this.kbx*(radius*2)+(radius-4)>this.bx ||
                        map[this.kbx+1][this.kby+1] == 1&&(this.kby+1)*(radius*2) < this.by +radius&&this.kbx*(radius*2)+(radius+4)<this.bx
                    ){
                        this.by = this.mby;
                        this.ran_d =Math.floor(Math.random()*3);
                        if(this.ran_d == 0){this.dir=0;}
                        else if(this.ran_d == 1){this.dir=2;}
                        else if(this.ran_d == 2){this.dir=3;}
                    }
                }
                if(this.dir==2){
                    this.bx = this.bx-this.speedX;
                    if (
                        map[this.kbx-1][this.kby] == 1&&this.kbx*(radius*2)>this.bx-radius ||
                        map[this.kbx-1][this.kby-1] ==1&&this.kbx*(radius*2)>this.bx-radius &&this.kby*(radius*2)+(radius-4)>this.by ||
                        map[this.kbx-1][this.kby+1] ==1&&this.kbx*(radius*2)>this.bx-radius &&this.kby*(radius*2)+(radius+4)<this.by
                     ) {
                        this.bx = this.mbx;
                        this.ran_d =Math.floor(Math.random()*3);
                        if(this.ran_d == 0){this.dir=0;}
                        else if(this.ran_d == 1){this.dir=1;}
                        else if(this.ran_d == 2){this.dir=3;}
                    }
                    if(this.bx<radius*2+2){
                        this.bx=ctx.canvas.width;
                    }
                }
                if(this.dir==3){
                    this.by = this.by-this.speedY;
                    if(
                        map[this.kbx][this.kby-1] == 1&&this.kby*(radius*2)>this.by-radius ||
                        map[this.kbx-1][this.kby-1] == 1&&this.kby*(radius*2)>this.by-radius&&this.kbx*(radius*2)+(radius-4)>this.bx ||
                        map[this.kbx+1][this.kby-1] == 1&&this.kby*(radius*2)>this.by-radius&&this.kbx*(radius*2)+(radius+4)<this.bx
                    ){
                        this.by = this.mby;
                        this.ran_d =Math.floor(Math.random()*3);
                        if(this.ran_d == 0){this.dir=0;}
                        else if(this.ran_d == 1){this.dir=1;}
                        else if(this.ran_d == 2){this.dir=2;}
                    }
                }
                if(this.countE%32==0){
                    if(
                        Math.abs(this.bx-x)<300&&
                        Math.abs(this.by-y)<300&&
                        Math.abs(this.bx-x)<Math.abs(this.by-y)&&
                        this.bx<x
                    ){this.dir=0;}
                    else if(
                        Math.abs(this.bx-x)<300&&
                        Math.abs(this.by-y)<300&&
                        Math.abs(this.bx-x)>Math.abs(this.by-y)&&
                        this.by<y
                    ){this.dir=1;}
                    else if(
                        Math.abs(this.bx-x)<300&&
                        Math.abs(this.by-y)<300&&
                        Math.abs(this.bx-x)<Math.abs(this.by-y)&&
                        this.bx>x
                    ){this.dir=2;}
                    else if(
                        Math.abs(this.bx-x)<300&&
                        Math.abs(this.by-y)<300&&
                        Math.abs(this.bx-x)>Math.abs(this.by-y)&&
                        this.bx>x
                    ){this.dir=3;}
                    else{
                        this.dir = Math.floor(Math.random()*4);
                    }
                }
                    // bx = bx+speedX;
                    // by = by+speedY;
                    // if(bx < 30 || bx > 750){
                    //     speedX *=-1;
                    // }
                    // if(by < 30 || by > 570){
                    //     speedY *=-1;
                    // }
                    if(this.kbx==kx&&this.kby==ky){
                    if(hp<3){
                        //window.alert('GameOver(@o@)');
                        isGaming=false;
                    }
                    else{
                      hp--;
                      audios["damage"].play();
                      //console.log(hp);
                    }
                    }
                // console.log(bx);
                // console.log(by);
                //ボール（粒子）を描く
                //console.log(this.dir);
                //console.log('speedy:'+this.speedY)
                ctx.beginPath();
                ctx.fillStyle = 'skyblue';
                ctx.arc(this.bx,this.by,radius,0,2*Math.PI,true);
                ctx.fill();
            }
        }
        var enemy_array = [];
        var posArray=[{bx:350,by:150},{bx:650,by:150},{bx:150,by:550},{bx:150,by:250}];
        var enemy_num=4;
        for(var i=0 ; i< enemy_num; i++){
            enemy_array[i] = new Enemy(posArray[i].bx,posArray[i].by);
        }
        //console.log(enemy_array);
        // var Enemy1 = new Enemy();
        // var Enemy2 = new Enemy();
        // var Enemy3 = new Enemy();
        // var Enemy4 = new Enemy();
        // var Enemy5 = new Enemy();
        // var Enemy6 = new Enemy();
        // var Enemy7 = new Enemy();
        // var Enemy8 = new Enemy();
        // var Enemy9 = new Enemy();
        // var Enemy10 = new Enemy();
        function feed(){
            var audios = {"itemget": new Audio("bgm/se1.wav")};
            for(var i in audios){
            　　audios[i].load();
            }
            var counter =0;
            for( i = 0 ; i < mapX ; i++ ){
                for( j = 0 ; j <mapY ; j++){
                    if(map[i][j]==2){
                        counter++;
                        ctx.beginPath();
                        ctx.fillStyle = 'rgba(255,255,0,1)';
                        ctx.arc((radius*2)*i+radius,(radius*2)*j+radius,10,0,Math.PI*2,true);
                        ctx.fill();
                        if(kx==i&&ky==j){
                            score++;
                            map[i][j]=0;
                            //sound_feed();
                            audios["itemget"].play();
                        }
                    }
                }
            }
            console.log(counter);
            //console.log('score:'+score);
            //console.log('feed:'+counter*2);
            if(counter==0){//isGaming &&
                isGaming = false;
                //window.alert('バグを憎んで人を憎まず!!!!');
                // var elem = document.getElementById('elem');
                // Element.addClassName(elem,"elem2");
            }
        }
        function getResult(){
            result = score;
            console.log(result);
             var form1 = document.getElementById('result');
            // form.action = "result.php";
            // form.method = "post";
            form.innerHTML = "<input name='result' type='hidden' value='"+result+"'>";
            document.body.appendChild(form);
            form.submit();

            var form2 = document.getElementById('user');
            form.innerHTML = "<input name='user' type='hidden' value='"+user+"'>";
            document.body.appendChild(form);
            form.submit();
        }
        function sound_feed(){
            document.getElementById("sound_feed").play;
        }
        function text(){
             ctx.font = 'bold 40px Verdana';
             ctx.textAlign = 'left';
             ctx.fillStyle="rgba(0,0,255,1)";
             ctx.fillText('score:'+score,550,1400);
        }
        function clear(){
            for(i=0 ; i < 40 ; i++){
                for(j = 0 ; j < 20 ; j++){
                    if(map[i][j]==2){
                    }
                }
            }
        }
        // (function Timer(){

             var startTime = Date.now();
             var timerId;
             var elapsedTime =0;
             var isRunning = true;
             updateTimerText();
        //
        //     var startButton = document.getElementById('start');
        //     var stopButton = document.getElementById('stop');
        //     var resetButton = document.getElementById('reset');
        //     var timerText = document.getElementById('timerText');
        //
        //     function setButtonState(start,stop,reset){
        //         startButton.className = start ? 'btn active' : 'btn inactive';
        //         stopButton.className= stop ? 'btn active' : 'btn inactive';
        //         resetButton.className = reset ? 'btn active' : 'btn inactive';
        //     }
        //     setButtonState(true,false,false);
        //
        //     startButton.addEventListener('click',function(){
        //         if(isRunning)return;
        //         isRunning =true;
        //         startTime = Date.now();
        //         updateTimerText();
        //         setButtonState(false,true,false);
        //     });
        //     stopButton.addEventListener('click',function(){
        //         if(!isRunning)return;
        //         isRunning =false;
        //         elapsedTime +=  Date.now() - startTime;
        //         clearTimeout(timerId);
        //         setButtonState(true,false,true);
        //     });
        //     resetButton.addEventListener('click',function(){
        //         if(isRunning)return;
        //         timerText.innerHTML = '0.00';
        //         elapsedTime =0;
        //         setButtonState(true,false,false);
        //     });

            function updateTimerText(){
                timerId = setTimeout(function(){
                    var time=60;
                    var t = Date.now() - startTime+ elapsedTime;
                    var timeLeft = (time-(t/1000)).toFixed(2);
                    timerText.innerHTML = timeLeft;
                    updateTimerText();
                    if(timeLeft<=0){
                    timerText.innerHTML = "Game Over";
                    isRunning = false;
                    //window.alert('GameOver....... (; ;)');
                }
                }, 10);
            }
        //})();


        //メインアニメーション描画
        ( function loop(){
            requestAnimationFrame( loop );
            // ctx.clearRect(0, 0, w, h);
            ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
            ctx.beginPath();
            mx = x;
            my = y;
            if(pushRight){
                if(x>=(ctx.canvas.width)-(radius*2+5)){
                    x=0;
                }
                x+=speed;
            }
            if(pushLeft){
                if(x<radius*2+2){
                    x=ctx.canvas.width;
                }
                x-=speed;
            }
            if(pushUp){
                y-=speed;
            }
            if(pushDown){
                y+=speed;
            }
            //一番右にぶつかった時に一番左に移動
            // if(
            //     ((y<=ctx.canvas.height/3)&&(x<=radius))||
            //     (y>=(2*(ctx.canvas.height)/3)&&(x<=radius))
            // ){
            //     x=radius+1;
            // }
            // if(x<0){
            //     if(pushLeft){
            //         x=ctx.canvas.width;
            //     }
            // }
            //一番上にぶつかった時に止まる
            // if(y<=radius){
            //     y=radius+1;
            // }
            //一番右にぶつかった時に一番左に移動
            //  if(
            //      ((y<=ctx.canvas.height/3)&&(x>(ctx.canvas.width-radius)))||
            //      ((y>=(2*ctx.canvas.height/3))&&(x>(ctx.canvas.width-radius)))
            //  ){
            //      x=ctx.canvas.width-radius;
            // }
            // if(x>=ctx.canvas.width){
            //     if(pushRight){
            //         x=0;
            //         console.log(x);
            //     }
            // }
            //一番下にぶつかった時に一番上に移動
            // if(y>=(ctx.canvas.height)-radius){
            //     y=(ctx.canvas.height)-radius;
            // }
            //xyの座標がmapの壁とぶつかった際に元の位置に戻る
            kx = Math.floor( x / (radius*2) );
            ky = Math.floor( y / (radius*2) );
            //console.log('kx : ' + kx + ' (kx+1)*30 : ' + (kx+1)*30 + ' , x : ' + x);
            //console.log('kx:'+kx);
            //console.log('x:'+x);
            //console.log('mx:'+mx);
            //console.log((ky+15)<y<(ky+23) );
            //console.log( 'ky:'+ky );
            //console.log( 'y:'+y );
                if(pushRight){
                    if (
                        map[kx+1][ky] == 1&& (kx+1)*(radius*2) < x +radius  ||
                        map[kx+1][ky-1] ==1&&(kx+1)*(radius*2) < x +radius&&ky*(radius*2)+(radius-4)>y ||
                        map[kx+1][ky+1] ==1&&(kx+1)*(radius*2) < x +radius&&ky*(radius*2)+(radius+4)<y)
                    {
                        x = mx;
                    }
                    else if(
                        map[kx+1][ky] == 0||map[kx+1][ky-1] ==0||map[kx+1][ky+1] ==0
                    )
                    {

                    }
                }
                if (pushLeft) {
                    if (
                        map[kx-1][ky] == 1&&kx*(radius*2)>x-radius ||
                        map[kx-1][ky-1] ==1&&kx*(radius*2)>x-radius &&ky*(radius*2)+(radius-4)>y ||
                        map[kx-1][ky+1] ==1&&kx*(radius*2)>x-radius &&ky*(radius*2)+(radius+4)<y
                     ) {
                        x = mx;
                    }
                    else if(
                        map[kx-1][ky] == 0||map[kx-1][ky-1] ==0||map[kx-1][ky+1] ==0
                    ){

                    }
                }
                //console.log("kx*30>x-15:"+kx*30>x-15);
                //console.log("map[kx-1][ky] == 1:"+map[kx-1][ky] == 1);
                if(pushDown){
                    if(
                        map[kx][ky+1] == 1 && (ky+1)*(radius*2) < y +radius ||
                        map[kx-1][ky+1] ==1&&(ky+1)*(radius*2) < y +radius&&kx*(radius*2)+(radius-4)>x ||
                        map[kx+1][ky+1] == 1&&(ky+1)*(radius*2) < y +radius&&kx*(radius*2)+(radius+4)<x
                    ){
                        y = my;
                    }
                }
                if(pushUp){
                    if(
                        map[kx][ky-1] == 1&&ky*(radius*2)>y-radius ||
                        map[kx-1][ky-1] == 1&&ky*(radius*2)>y-radius&&kx*(radius*2)+(radius-4)>x ||
                        map[kx+1][ky-1] == 1&&ky*(radius*2)>y-radius&&kx*(radius*2)+(radius+4)<x
                    ){
                        y = my;
                    }
                }
            // if (map[kx][ky] == 1) {
            //     if(x > kx + 15 ){
            //         x = mx + 15;
            //     }else if( x < kx ){
            //         x = mx - 15;
            //     }
                // x = mx;
                //y = my;
            //}
            //   console.log(ky);
            //   console.log(kx);
        if(pushLeft){
            pushRight = false;
            pushDown = false;
            pushUp = false;
            countL+=0.5;
            radr_h=0
            radr_h2=0
            switch (countL%10) {
                case 0:
                case 0.5:
                case 8:
                case 8.5:
                radl_h= 192;
                radl_h2=168;
                    break;

                case 1:
                case 1.5:
                case 7:
                case 7.5:
                radl_h= 204;
                radl_h2=156;
                    break;

                case 2:
                case 2.5:
                case 6:
                case 6.5:
                radl_h= 216;
                radl_h2=144;
                    break;

                case 3:
                case 3.5:
                case 5:
                case 5.5:
                radl_h= 228;
                radl_h2=132;
                    break;

                case 4:
                case 4.5:
                radl_h= 240;
                radl_h2=120;
                    break;

                default:
                radl_h= 180;
                radl_h2=180;
            }
            // if(countL%10==0||countL%10==8){
            //         radl_h= 192;
            //         radl_h2=168;
            // }
            // else if(countL%10==1||
            //     countL%10==7
            // ){
            //     radl_h= 204;
            //     radl_h2=156;
            // }
            // else if(countL%10==2||
            //     countL%10==6
            // ){
            //     radl_h= 216;
            //     radl_h2=144;
            // }
            // else if(countL%10==3||
            //     countL%10==5
            // ){
            //     radl_h= 228;
            //     radl_h2=132;
            // }
            // else if(countL%10==4
            // ){
            //     radl_h= 240;
            //     radl_h2=120;
            // }
            // else{
            //     radl_h= 180;
            //     radl_h2=180;
            // }
            //console.log(radl_h);
            ctx.beginPath();
            ctx.fillStyle = "rgba(255,255,32,1)";
            ctx.arc(x,y,radius,radr_h* Math.PI/180,radl_h* Math.PI/180,true);
            ctx.arc(x,y,radius,radr_h2* Math.PI/180,radl_h2* Math.PI/180,false);
            ctx.fill();
        }
        else if(pushRight){
            pushDown = false;
            pushLeft = false;
            pushUp = false;
            countR+=0.5;
            radl_h=180;
            radl_h2=180;
            switch (countR%10) {
                case 0:
                case 8:
                case 0.5:
                case 8.5:
                radr_h= 12;
                radr_h2=348;
                    break;

                case 1:
                case 7:
                case 1.5:
                case 7.5:
                radr_h= 24;
                radr_h2=336;
                    break;

                case 2:
                case 6:
                case 2.5:
                case 6.5:
                radr_h= 36;
                radr_h2=324;
                    break;

                case 3:
                case 5:
                case 3.5:
                case 5.5:
                radr_h= 48;
                radr_h2=312;
                    break;

                case 4:
                case 4.5:
                radr_h= 60;
                radr_h2=300;
                    break;

                default:
                radr_h= 0;
                radr_h2=0;
            }
        //     if(countR%10==0||
        //         countR%10==1||
        //         countR%10==2
        //     ){
        //             ctx.beginPath();
        //             ctx.fillStyle = "rgba(255,255,32,1)";
        //             radr_h= 300;
        //             radr_h2=60;
        //             ctx.arc(x,y,radius,radr_h* Math.PI/180,radl_h* Math.PI/180,true);
        //             ctx.arc(x,y,radius,radr_h2* Math.PI/180,radl_h2* Math.PI/180,false);
        //             ctx.fill();
        //     }
        //     else if(countR%10==3||
        //         countR%10==4||
        //         countR%10==8||
        //         countR%10==9
        //     ){
        //         ctx.beginPath();
        //         ctx.fillStyle = "rgba(255,255,32,1)";
        //         radr_h= 330;
        //         radr_h2=30;
        //         ctx.arc(x,y,radius,radr_h* Math.PI/180,radl_h* Math.PI/180,true);
        //         ctx.arc(x,y,radius,radr_h2* Math.PI/180,radl_h2* Math.PI/180,false);
        //         ctx.fill();
        //     }
        //     else{
                ctx.beginPath();
                ctx.fillStyle = "rgba(255,255,32,1)";
                radl_h= 180;
                radl_h2=180;
                ctx.arc(x,y,radius,radr_h* Math.PI/180,radl_h* Math.PI/180,true);
                ctx.arc(x,y,radius,radr_h2* Math.PI/180,radl_h2* Math.PI/180,false);
                ctx.fill();
            }
        else if(pushUp){
            pushDown = false;
            pushLeft = false;
            pushRight = false;
            countU+=0.5;
            radl_h=rlh_defalt;
            radl_h2=rlh2_defalt;
            radr_h=rrh_defalt;
            radr_h2=rrh2_defalt;
            radb_v=rbv_defalt;
            radb_v2=rbv2_defalt;

            switch (countU%10) {
                case 0:
                case 8:
                case 0.5:
                case 8.5:
                radt_v= 282;
                radt_v2=258;
                    break;

                case 1:
                case 7:
                case 1.5:
                case 7.5:
                radt_v= 294;
                radt_v2=246;
                    break;

                case 2:
                case 6:
                case 2.5:
                case 6.5:
                radt_v= 306;
                radt_v2=234;
                    break;

                case 3:
                case 5:
                case 3.5:
                case 5.5:
                radt_v= 318;
                radt_v2=222;
                    break;

                case 4:
                case 4.5:
                radt_v= 330;
                radt_v2=210;
                    break;

                default:
                radt_v= 270;
                radt_v2=270;
            }
            ctx.beginPath();
            ctx.fillStyle = "rgba(255,255,32,1)";
            ctx.arc(x,y,radius,radt_v* Math.PI/180,radb_v* Math.PI/180,true);
            ctx.arc(x,y,radius,radt_v2* Math.PI/180,radb_v2* Math.PI/180,false);
            ctx.fill();
        }
        else if(pushDown){
            pushfalse = false;
            pushLeft = false;
            pushRight = false;
            countD+=0.5;
            radl_h=rlh_defalt;
            radl_h2=rlh2_defalt;
            radr_h=rrh_defalt;
            radr_h2=rrh2_defalt;
            radt_v=rtv_defalt;
            radt_v2=rtv2_defalt;

            switch (countD%10) {
                case 0:
                case 0.5:
                case 8:
                case 8.5:
                radb_v= 78;
                radb_v2=102;
                    break;

                case 1:
                case 1.5:
                case 7:
                case 7.5:
                radb_v= 66;
                radb_v2=114;
                    break;

                case 2:
                case 2.5:
                case 6:
                case 6.5:
                radb_v= 54;
                radb_v2=126;
                    break;

                case 3:
                case 3.5:
                case 5:
                case 5.5:
                radb_v= 42;
                radb_v2=138;
                    break;

                case 4:
                case 4.5:
                radb_v= 30;
                radb_v2=150;
                    break;

                default:
                radb_v= 90;
                radb_v2=90;
            }
            ctx.beginPath();
            ctx.fillStyle = "rgba(255,255,32,1)";
            ctx.arc(x,y,radius,radt_v* Math.PI/180,radb_v* Math.PI/180,true);
            ctx.arc(x,y,radius,radt_v2* Math.PI/180,radb_v2* Math.PI/180,false);
            ctx.fill();
        }
        else {
            //var image = document.getElementById("gs_icon");
            //image.addEventListener("load",function(){
                ctx.beginPath();
                ctx.fillStyle = "rgba(255,255,32,1)";
                //var  pattern = ctx.createPattern(image,'repeat');
                //ctx.fillStyle = pattern;
                //ctx.rect(x,y,40,40)
                ctx.arc(x,y,radius,0,Math.PI*2,true);
                ctx.fill();
            //},false);
            // ctx.beginPath();
            // ctx.fillStyle = "rgba(255,255,32,1)";
            // ctx.arc(x,y,radius,0,Math.PI*2,true);
            // ctx.fill();
        }
        dataSend();
        feed();
        mapView();
        text();
        for(var i =0 ; i <enemy_num; i++){
            enemy_array[i].move() ;
        }
        // // Enemy1.move() ;
        // Enemy2.move() ;
        // Enemy3.move() ;
        // Enemy4.move() ;
    } )();
