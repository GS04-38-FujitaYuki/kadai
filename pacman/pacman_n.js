(function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    var countL = 0;
    var countR = 0;
    var countU = 0;
    var countD = 0;
    var countE = 0;
    var w = canvas.width;
    var h = canvas.height;
    var x = 200;
    var y = 200;
    var kx = Math.floor(x / radius * 2);
    var ky = Math.floor(y / radius * 2);
    var mx = 50;
    var my = 50;
    var radius = 20;
    var pacman;
    var pushLeft = false;
    var pushRight = false;
    var pushUp = false;
    var pushDown = false;
    var i = 0;
    var j = 0;
    var d = 0;
    var score = 0;
    var wx = i * 30;
    var wy = j * 30;
    var hp = 10;
    var speed = 5;
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
    var rbv_defalt = 90;
    var rrh_defalt = 0;
    var rlh_defalt = 180;
    var rtv2_defalt = 270;
    var rbv2_defalt = 90;
    var rrh2_defalt = 0;
    var rlh2_defalt = 180;
    var offset = 0;
    var frame = 270;
    var result = 0
    var user = null;
    var ran = [];
    var damaged =false;
    var countdmg = 0;
    for (i = 0; i < 100; i++) {
        ran[i] = Math.floor(Math.random() * 3);
    }
    var isGaming = true;
    var map = [];
    var dir = 0;
    var isSending = false;
    var map = [
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
        [1, 1, 2, 0, 1, 0, 2, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0, 2, 1, 1],
        [1, 1, 2, 0, 1, 0, 2, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0, 2, 1, 1],
        [1, 1, 2, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 2, 1, 1],
        [1, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 1, 1],
        [1, 1, 2, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 2, 1, 1],
        [1, 1, 2, 0, 0, 0, 2, 2, 2, 1, 2, 2, 2, 0, 1, 0, 0, 2, 1, 1],
        [1, 1, 2, 0, 0, 0, 2, 2, 2, 1, 2, 2, 2, 0, 1, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
        [1, 1, 2, 0, 1, 0, 2, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0, 2, 1, 1],
        [1, 1, 2, 0, 1, 0, 2, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0, 2, 1, 1],
        [1, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 2, 2, 2, 1, 2, 2, 2, ran[0], ran[1], ran[5], ran[6], 1, 1, 1],
        [1, 1, 2, 2, 0, 1, 2, 2, 2, 1, 2, 2, 2, ran[2], ran[3], ran[4], ran[7], 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1],
        [1, 1, 2, 0, 1, 0, 2, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0, 2, 1, 1],
        [1, 1, 2, 0, 1, 0, 2, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0, 2, 1, 1],
        [1, 1, 2, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 2, 1, 1],
        [1, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 1, 1],
        [1, 1, 2, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 2, 1, 1],
        [1, 1, 2, 0, 0, 0, 2, 2, 2, 1, 2, 2, 2, 0, 1, 0, 0, 2, 1, 1],
        [1, 1, 2, 0, 0, 0, 2, 2, 2, 1, 2, 2, 2, 0, 1, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    var mapX = map.length;
    var mapY = map[0].length;
    var feedget = false;
    //各キーダウン時に各方向の変数をtrueにする
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 39:
            case 221:
                pushUp = false;
                pushDown = false;
                pushLeft = false;
                pushRight = true;
                ctx.beginPath();
                ctx.fillStyle = "rgba(255,255,32,1)";
                radl_h = 180;
                radl_h2 = 180;
                ctx.arc(x, y, radius, radr_h * Math.PI / 180, radl_h * Math.PI / 180, true);
                ctx.arc(x, y, radius, radr_h2 * Math.PI / 180, radl_h2 * Math.PI / 180, false);
                ctx.fill();
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
    function dataSend() {
        if (isGaming == false && isSending == false) {
            getResult();
            isSending = true;
        }
    }
    function Dialog(mes,def){
        var dl = prompt(mes,def);
        if (dl) {
            console.log(" OK が押された:" +dl);
        } else {
            console.log(" CANCEL が押された");
        }
        return dl;
    }
    //マップを描画
    function mapView() {
        for (i = 0; i < mapX; i++) {
            for (j = 0; j < mapY; j++) {
                if (map[i][j] == 1) {
                    var image = document.getElementById("wr_logo");
                    var pattern = ctx.createPattern(image, "repeat");
                    ctx.beginPath();
                    ctx.fillStyle = pattern;
                    ctx.rect(i * (radius * 2), j * (radius * 2), radius * 2, radius * 2);
                    ctx.fill();
                }
            }
        }
        //HPゲージを描画
        for (i = 1; i < hp; i++) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(255,0,0,1)";
            ctx.fillRect(1200, 30 * i, 30, 25);
            ctx.fill();
        }
    }

    function Enemy(bx, by) {
        this.dir = Math.floor(Math.random() * 4);
        this.speedX = 5;
        this.speedY = 5;
        this.bx = bx;
        this.by = by;
        this.mbx = this.bx;
        this.mby = this.by;
        this.kbx = Math.floor(this.bx / (radius * 2));
        this.kby = Math.floor(this.by / (radius * 2));
        this.countE = 0;
        this.damageSound = new Audio("bgm/damage.mp3");
        this.damageSound.load();
        this.move = function() {
            this.kbx = Math.floor(this.bx / (radius * 2));
            this.kby = Math.floor(this.by / (radius * 2));
            this.mbx = this.bx;
            this.mby = this.by;
            this.countE++;
            if (this.dir == 0) {
                this.bx = this.bx + this.speedX;
                //console.log(this.bx >= (ctx.canvas.width) - (radius + 25));
                if (
                    map[this.kbx + 1][this.kby] == 1 && (this.kbx + 1) * (radius * 2) < this.bx + radius ||
                    map[this.kbx + 1][this.kby - 1] == 1 && (this.kbx + 1) * (radius * 2) < this.bx + radius && this.kby * (radius * 2) + (radius - 4) > this.by ||
                    map[this.kbx + 1][this.kby + 1] == 1 && (this.kbx + 1) * (radius * 2) < this.bx + radius && this.kby * (radius * 2) + (radius + 4) < this.by ||
                    this.bx >= (ctx.canvas.width) - (radius + 25)
                ) {
                    this.bx = this.mbx;
                    this.ran_d = Math.floor(Math.random() * 3);
                    if (this.ran_d == 0) {
                        this.dir = 1;
                    } else if (this.ran_d == 1) {
                        this.dir = 2;
                    } else if (this.ran_d == 2) {
                        this.dir = 3;
                    }
                }
                // if (this.bx >= (ctx.canvas.width) - (radius * 2 + 5)) {
                //     this.bx = 0;
                // }
            }
            if (this.dir == 1) {
                this.by = this.by + this.speedY;
                if (
                    map[this.kbx][this.kby + 1] == 1 && (this.kby + 1) * (radius * 2) < this.by + radius ||
                    map[this.kbx - 1][this.kby + 1] == 1 && (this.kby + 1) * (radius * 2) < this.by + radius && this.kbx * (radius * 2) + (radius - 4) > this.bx ||
                    map[this.kbx + 1][this.kby + 1] == 1 && (this.kby + 1) * (radius * 2) < this.by + radius && this.kbx * (radius * 2) + (radius + 4) < this.bx
                ) {
                    this.by = this.mby;
                    this.ran_d = Math.floor(Math.random() * 3);
                    if (this.ran_d == 0) {
                        this.dir = 0;
                    } else if (this.ran_d == 1) {
                        this.dir = 2;
                    } else if (this.ran_d == 2) {
                        this.dir = 3;
                    }
                }
            }
            if (this.dir == 2) {
                this.bx = this.bx - this.speedX;
                if (
                    map[this.kbx - 1][this.kby] == 1 && this.kbx * (radius * 2) > this.bx - radius ||
                    map[this.kbx - 1][this.kby - 1] == 1 && this.kbx * (radius * 2) > this.bx - radius && this.kby * (radius * 2) + (radius - 4) > this.by ||
                    map[this.kbx - 1][this.kby + 1] == 1 && this.kbx * (radius * 2) > this.bx - radius && this.kby * (radius * 2) + (radius + 4) < this.by ||
                    this.bx < radius + 25
                ) {
                    this.bx = this.mbx;
                    this.ran_d = Math.floor(Math.random() * 3);
                    if (this.ran_d == 0) {
                        this.dir = 0;
                    } else if (this.ran_d == 1) {
                        this.dir = 1;
                    } else if (this.ran_d == 2) {
                        this.dir = 3;
                    }
                }
                // if (this.bx < radius * 2 + 2) {
                //     this.bx = ctx.canvas.width;
                // }
            }
            if (this.dir == 3) {
                this.by = this.by - this.speedY;
                if (
                    map[this.kbx][this.kby - 1] == 1 && this.kby * (radius * 2) > this.by - radius ||
                    map[this.kbx - 1][this.kby - 1] == 1 && this.kby * (radius * 2) > this.by - radius && this.kbx * (radius * 2) + (radius - 4) > this.bx ||
                    map[this.kbx + 1][this.kby - 1] == 1 && this.kby * (radius * 2) > this.by - radius && this.kbx * (radius * 2) + (radius + 4) < this.bx
                ) {
                    this.by = this.mby;
                    this.ran_d = Math.floor(Math.random() * 3);
                    if (this.ran_d == 0) {
                        this.dir = 0;
                    } else if (this.ran_d == 1) {
                        this.dir = 1;
                    } else if (this.ran_d == 2) {
                        this.dir = 2;
                    }
                }
            }
            if (this.countE % 32 == 0) {
                this.dir = Math.floor(Math.random() * 4);

            }
            if (this.kbx == kx && this.kby == ky&&!damaged) {
                hp--;
                this.damageSound.play();
                if (hp < 3) {
                    window.alert('GameOver(@o@)');
                    window.cancelAnimationFrame(requesutID);
                    gameOver();
                }
                damaged = true;
            }
            //ボール（粒子）を描く
            ctx.beginPath();
            ctx.fillStyle = 'skyblue';
            ctx.arc(this.bx, this.by, radius, 0, 2 * Math.PI, true);
            ctx.fill();
        }
    }
    var counting = false;
    function damageFunc(dx, dy) {
        if(damaged==true){
            countdmg++;
            // if(0<countdmg <10){
            //     ctx.clearRect(dx-20,dy-20,40,40);
            //     counting = true;
            // }else if(20<countdmg<30){
            //     ctx.clearRect(dx-20,dy-20,40,40);
            //     counting = true;
            // }else if(40<countdmg<50){
            //     ctx.clearRect(dx-20,dy-20,40,40);
            //     counting = true;
            // }else{
            //     counting = false;
            // }
        }
        if(countdmg>=60){
            damaged=false;
            countdmg=0;
        }
        console.log(countdmg);
        console.log('damaged:'+damaged);
        console.log('counting:'+counting);
        counting=false;
    }
    var enemy_array = [];
    posArray = [{
        bx: 350,
        by: 150
    }, {
        bx: 650,
        by: 150
    }, {
        bx: 150,
        by: 550
    }, {
        bx: 150,
        by: 250
    }];
    var enemy_num = posArray.length;
    for (var i = 0; i < enemy_num; i++) {
        enemy_array[i] = new Enemy(posArray[i].bx, posArray[i].by);
    }

    function feedView() {
        var itemGet = new Audio("bgm/se1.wav");
        itemGet.load();
        var audios = {"itemget": new Audio("bgm/se1.wav")};
        var counter = 0;
        for (i = 0; i < mapX; i++) {
            for (j = 0; j < mapY; j++) {
                if (map[i][j] == 2) {
                    counter++;
                    ctx.beginPath();
                    ctx.fillStyle = 'rgba(255,255,0,1)';
                    ctx.arc((radius * 2) * i + radius, (radius * 2) * j + radius, 10, 0, Math.PI * 2, true);
                    ctx.fill();
                    if (kx == i && ky == j) {
                        score++;
                        map[i][j] = 0;
                        feedget=true;
                        // sound_feed();
                        itemGet.play();
                    }
                }
            }
        }
        if (counter == 0) {
            isGaming = false;
            window.alert('バグを憎んで人を憎まず!!!!');
            gameOver();
        }
    }
    // function sound_feed() {
    //     document.getElementById("sound_feed").play();
    // }
    function feedSound(){
        if(feedget){
            document.getElementById("sound_feed").play();
            feedget = false;
        }
    }
    function gameOver() {
        //console.log('aaaaaaa');
        var mes = 'gameover';
        var def = 'UserName';
        user = Dialog(mes,def);
        getResult();
        isGaming = false;
        isSending = true;
        isRunning = false;
    }

    function getResult() {
        result = score;
        console.log(result);
        console.log('user:'+user);
        var form = document.getElementById('result');
        form.innerHTML = "<input name='result' type='hidden' value='" + result + "'>";
        document.getElementById("result").appendChild(form);
        form.submit();

        // var form2 = document.getElementById('user');
        // form.innerHTML = "<input name='user' type='hidden' value='" + user + "'>";
        // document.getElementById("user").appendChild(form2);
        // form.submit();
    }
    function text() {
        ctx.font = 'bold 40px Verdana';
        ctx.textAlign = 'left';
        ctx.fillStyle = "rgba(0,0,255,1)";
        ctx.fillText('score:' + score, 550, 600);
    }
    //整数値かどうかを判定
    // function isInteger(x){
    //     return Math.round(x) === x;
    // }
    //timer関数
    var startTime = Date.now();
    var timeNow = 0;
    var timeLimit = 60;
    var timerText;
    var roundText;

    function updateTimerText() {
        timeNow = Date.now();
        timerText = timeLimit - (timeNow / 1000 - startTime / 1000);
        roundText = (Math.round(timerText * 100)) / 100;
        ctx.font = 'bold 40px Verdana';
        ctx.textAlign = 'left';
        ctx.fillStyle = "rgba(255,255,255,1)";
        //ctx.fillText('time:' + roundText, 300, 100);
        if (roundText < 10 < 0) {
            ctx.fillText('time:0' + roundText, 300, 100);
            // if(isInteger(roundText)){
            //     ctx.fillText('time:' +roundText+'00',300,100);
            // }else if(isInteger(roundText)){
            //     ctx.fillText('time:' +roundText+'0',300,100);
        } else if (roundText <= 0) {
            ctx.fillText('GameOver($0$)', 300, 100);
            window.alert('GameOver($0$)');
            window.cancelAnimationFrame(requesutID);
            gameOver();
        } else {
            ctx.fillText('time:' + roundText, 300, 100);
        }
    }
    //メインアニメーション描画
    var requestAnimationFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000.0 / 60.0);
            };
        })();
    var requestID;
    (function loop() {
        requesutID = requestAnimationFrame(loop);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();
        mx = x;
        my = y;
        if (pushRight) {
            if (x >= (ctx.canvas.width) - (radius * 2 + 5)) {
                x = 0;
            }
            x += speed;
        }
        if (pushLeft) {
            if (x < radius * 2 + 2) {
                x = ctx.canvas.width;
            }
            x -= speed;
        }
        if (pushUp) {
            y -= speed;
        }
        if (pushDown) {
            y += speed;
        }
        kx = Math.floor(x / (radius * 2));
        ky = Math.floor(y / (radius * 2));
        if (pushRight) {
            if (
                map[kx + 1][ky] == 1 && (kx + 1) * (radius * 2) < x + radius ||
                map[kx + 1][ky - 1] == 1 && (kx + 1) * (radius * 2) < x + radius && ky * (radius * 2) + (radius - 4) > y ||
                map[kx + 1][ky + 1] == 1 && (kx + 1) * (radius * 2) < x + radius && ky * (radius * 2) + (radius + 4) < y
            ) {
                x = mx;
            }
        }
        if (pushLeft) {
            if (
                map[kx - 1][ky] == 1 && kx * (radius * 2) > x - radius ||
                map[kx - 1][ky - 1] == 1 && kx * (radius * 2) > x - radius && ky * (radius * 2) + (radius - 4) > y ||
                map[kx - 1][ky + 1] == 1 && kx * (radius * 2) > x - radius && ky * (radius * 2) + (radius + 4) < y
            ) {
                x = mx;
            }
        }
        if (pushDown) {
            if (
                map[kx][ky + 1] == 1 && (ky + 1) * (radius * 2) < y + radius ||
                map[kx - 1][ky + 1] == 1 && (ky + 1) * (radius * 2) < y + radius && kx * (radius * 2) + (radius - 4) > x ||
                map[kx + 1][ky + 1] == 1 && (ky + 1) * (radius * 2) < y + radius && kx * (radius * 2) + (radius + 4) < x
            ) {
                y = my;
            }
        }
        if (pushUp) {
            if (
                map[kx][ky - 1] == 1 && ky * (radius * 2) > y - radius ||
                map[kx - 1][ky - 1] == 1 && ky * (radius * 2) > y - radius && kx * (radius * 2) + (radius - 4) > x ||
                map[kx + 1][ky - 1] == 1 && ky * (radius * 2) > y - radius && kx * (radius * 2) + (radius + 4) < x
            ) {
                y = my;
            }
        }
        if (pushLeft) {
            pushRight = false;
            pushDown = false;
            pushUp = false;
            countL += 0.5;
            radr_h = 0
            radr_h2 = 0
            switch (countL % 10) {
                case 0:
                case 0.5:
                case 8:
                case 8.5:
                    radl_h = 192;
                    radl_h2 = 168;
                    break;
                case 1:
                case 1.5:
                case 7:
                case 7.5:
                    radl_h = 204;
                    radl_h2 = 156;
                    break;
                case 2:
                case 2.5:
                case 6:
                case 6.5:
                    radl_h = 216;
                    radl_h2 = 144;
                    break;
                case 3:
                case 3.5:
                case 5:
                case 5.5:
                    radl_h = 228;
                    radl_h2 = 132;
                    break;
                case 4:
                case 4.5:
                    radl_h = 240;
                    radl_h2 = 120;
                    break;
                default:
                    radl_h = 180;
                    radl_h2 = 180;
            }
            ctx.beginPath();
            ctx.fillStyle = "rgba(255,255,32,1)";
            ctx.arc(x, y, radius, radr_h * Math.PI / 180, radl_h * Math.PI / 180, true);
            ctx.arc(x, y, radius, radr_h2 * Math.PI / 180, radl_h2 * Math.PI / 180, false);
            ctx.fill();
        } else if (pushRight) {
            pushDown = false;
            pushLeft = false;
            pushUp = false;
            countR += 0.5;
            radl_h = 180;
            radl_h2 = 180;
            switch (countR % 10) {
                case 0:
                case 8:
                case 0.5:
                case 8.5:
                    radr_h = 12;
                    radr_h2 = 348;
                    break;
                case 1:
                case 7:
                case 1.5:
                case 7.5:
                    radr_h = 24;
                    radr_h2 = 336;
                    break;
                case 2:
                case 6:
                case 2.5:
                case 6.5:
                    radr_h = 36;
                    radr_h2 = 324;
                    break;
                case 3:
                case 5:
                case 3.5:
                case 5.5:
                    radr_h = 48;
                    radr_h2 = 312;
                    break;
                case 4:
                case 4.5:
                    radr_h = 60;
                    radr_h2 = 300;
                    break;
                default:
                    radr_h = 0;
                    radr_h2 = 0;
            }
            ctx.beginPath();
            ctx.fillStyle = "rgba(255,255,32,1)";
            radl_h = 180;
            radl_h2 = 180;
            ctx.arc(x, y, radius, radr_h * Math.PI / 180, radl_h * Math.PI / 180, true);
            ctx.arc(x, y, radius, radr_h2 * Math.PI / 180, radl_h2 * Math.PI / 180, false);
            ctx.fill();
        } else if (pushUp) {
            pushDown = false;
            pushLeft = false;
            pushRight = false;
            countU += 0.5;
            radl_h = rlh_defalt;
            radl_h2 = rlh2_defalt;
            radr_h = rrh_defalt;
            radr_h2 = rrh2_defalt;
            radb_v = rbv_defalt;
            radb_v2 = rbv2_defalt;

            switch (countU % 10) {
                case 0:
                case 8:
                case 0.5:
                case 8.5:
                    radt_v = 282;
                    radt_v2 = 258;
                    break;

                case 1:
                case 7:
                case 1.5:
                case 7.5:
                    radt_v = 294;
                    radt_v2 = 246;
                    break;

                case 2:
                case 6:
                case 2.5:
                case 6.5:
                    radt_v = 306;
                    radt_v2 = 234;
                    break;

                case 3:
                case 5:
                case 3.5:
                case 5.5:
                    radt_v = 318;
                    radt_v2 = 222;
                    break;

                case 4:
                case 4.5:
                    radt_v = 330;
                    radt_v2 = 210;
                    break;

                default:
                    radt_v = 270;
                    radt_v2 = 270;
            }
            ctx.beginPath();
            ctx.fillStyle = "rgba(255,255,32,1)";
            ctx.arc(x, y, radius, radt_v * Math.PI / 180, radb_v * Math.PI / 180, true);
            ctx.arc(x, y, radius, radt_v2 * Math.PI / 180, radb_v2 * Math.PI / 180, false);
            ctx.fill();
        } else if (pushDown) {
            pushfalse = false;
            pushLeft = false;
            pushRight = false;
            countD += 0.5;
            radl_h = rlh_defalt;
            radl_h2 = rlh2_defalt;
            radr_h = rrh_defalt;
            radr_h2 = rrh2_defalt;
            radt_v = rtv_defalt;
            radt_v2 = rtv2_defalt;

            switch (countD % 10) {
                case 0:
                case 0.5:
                case 8:
                case 8.5:
                    radb_v = 78;
                    radb_v2 = 102;
                    break;

                case 1:
                case 1.5:
                case 7:
                case 7.5:
                    radb_v = 66;
                    radb_v2 = 114;
                    break;

                case 2:
                case 2.5:
                case 6:
                case 6.5:
                    radb_v = 54;
                    radb_v2 = 126;
                    break;

                case 3:
                case 3.5:
                case 5:
                case 5.5:
                    radb_v = 42;
                    radb_v2 = 138;
                    break;

                case 4:
                case 4.5:
                    radb_v = 30;
                    radb_v2 = 150;
                    break;

                default:
                    radb_v = 90;
                    radb_v2 = 90;
            }
            ctx.beginPath();
            ctx.fillStyle = "rgba(255,255,32,1)";
            ctx.arc(x, y, radius, radt_v * Math.PI / 180, radb_v * Math.PI / 180, true);
            ctx.arc(x, y, radius, radt_v2 * Math.PI / 180, radb_v2 * Math.PI / 180, false);
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.fillStyle = "rgba(255,255,32,1)";
            ctx.arc(x, y, radius, 0, Math.PI * 2, true);
            ctx.fill();
        }
        dataSend();
        feedView();
        mapView();
        text();
        updateTimerText();
        feedSound();
        damageFunc(x, y);
        for (var i = 0; i < enemy_num; i++) {
            enemy_array[i].move();
        }
    })();
})();
