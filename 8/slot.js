(function(){
    'use strict';
    var panels = ['(^^)','(; ;)','(>_<)'];
    var timers = [];
    var results = [];
    var stopCount = 0;
    var isPlaying = false;
    var insCoin =3;
    var startCoin = 100;
    var havCoin = startCoin;
    var gameNum = 0;
    var bet = [false, false ,false];
    var isStandby = false;
    var dif = 0;
    var cre = 0;
    var payo = 0;
    var bon=0;
    var getCoin = 0;
    var outCoin = 0;
    var btn0stpd = true;
    var btn1stpd = true;
    var btn2stpd = true;
    var diffData =[];
    var gameData =[];
    var bonData = [];
    var isBonus = false;

    var panel0 = document.getElementById('panel0') ;
    var panel1 = document.getElementById('panel1') ;
    var panel2 = document.getElementById('panel2') ;
    var btn0 = document.getElementById('btn0') ;
    var btn1 = document.getElementById('btn1') ;
    var btn2 = document.getElementById('btn2') ;
    var spinButton = document.getElementById('spinButton') ;
    var insButton = document.getElementById('insButton');
    var maxbet = document.getElementById('maxbet');
    var bet0 = document.getElementById('bet0');
    var bet1 = document.getElementById('bet1');
    var bet2 = document.getElementById('bet2');
    var graphButton = document.getElementById('graphButton');
    var diffDatao;
    var gameDatao;
    var bonDatao;

    //keyCodeを取得
    document.onkeydown = keydown;
    document.onkeyup = keyup;
    function keydown() {
        console.log("KeyCode :" + event.keyCode);
        // if (event.shiftKey == true) {console.log("Shift ");}
        // if (event.ctrlKey == true) {console.log("Ctrl ");}
        // if (event.altKey == true) {console.log("Alt ");}
        if (event.keyCode == 16) {
            // console.log('standby : '+isStandby);
            // console.log('play : '+isPlaying);
            if(isStandby&&btn0stpd&&btn1stpd&&btn2stpd){
                leverOn();
                btn0stpd=false;
                btn1stpd=false;
                btn2stpd=false;
                spinButton.className = 'spinButton active';
            }else{
                onMaxbet();
                maxbet.className = 'maxbet active';
            }
        }
        if (event.keyCode == 38) {
            onIns();
            insButton.className = "insButton active"
        }
        if (event.keyCode == 37) {
            stopSlot(0, panel0, btn0);
            btn0.addClassName = 'btn push';
            btn0stpd = true;
        }
        if (event.keyCode == 40) {
            stopSlot(1, panel1, btn1);
            btn1.addclassName = 'btn push';
            btn1stpd = true;
        }
        if (event.keyCode == 39) {
            stopSlot(2, panel2, btn2);
            btn2.addclassName = 'btn push';
            btn2stpd = true;
        }
    }
    function keyup(){
        //console.log("KeyCode :" + event.keyCode);
        // if (event.shiftKey == true) {console.log("Shift ");}
        // if (event.ctrlKey == true) {console.log("Ctrl ");}
        // if (event.altKey == true) {console.log("Alt ");}
        if (event.keyCode == 16) {
            maxbet.className = ' ';
            spinButton.className = ' ';
        }
        if (event.keyCode == 38) {
            insButton.className = ' ';

        }
    }

    game.innerHTML = 'GAME<br>'+gameNum;
    yourCoin.innerHTML = 'YOUR COIN<br>'+havCoin;
    credit.innerHTML = 'CREDIT<br>'+cre;
    payout.innerHTML = 'PAYOUT<br>'+payo;
    bonus.innerHTML = 'BONUS<br>'+bon;
    difCoin.innerHTML = 'DIFF<br>'+dif;

    spinButton.addEventListener('click',function(){
        leverOn();
    });
    function leverOn(){
        if(isPlaying||isStandby==false)return;
        isPlaying = true;
        gameNum ++;
        dif=dif-3;
        diffLogic();
        game.innerHTML='GAME<br>'+gameNum;
        btn0.className = 'btn';
        btn1.className = 'btn';
        btn2.className = 'btn';
        panel0.className = 'panel';
        panel1.className = 'panel';
        panel2.className = 'panel';

        runSlot(0, panel0);
        runSlot(1, panel1);
        runSlot(2, panel2);
        isPlaying = true;
    }

    btn0.addEventListener('click', function(){
        stopSlot(0, panel0, this);
        btn0stpd = true;
    });
    btn1.addEventListener('click', function(){
        stopSlot(1, panel1, this);
        btn1stpd = true;
    });
    btn2.addEventListener('click', function(){
        stopSlot(2, panel2, this);
        btn2stpd = true;
    });

    function setMaxbet(){
        maxbet.addEventListener('click',function(){
            onMaxbet();
        });
    }setMaxbet();

    function onMaxbet(){
        if(isStandby == true){
            return;
        }else if(cre>=3){
            cre = cre -3;
            credit.innerHTML = 'CREDIT<br>'+cre;
            bet[0] =true;
            bet[1] =true;
            bet[2] =true;
            bet0.className = 'bet';
            bet1.className = 'bet';
            bet2.className = 'bet';
            isStandby=true;
        }else if(cre == 2){
            if(bet[2]){
                return;
            }else if(!bet[2]&&bet[1]){
                bet[2] =true;
                bet2.className = 'bet';
                cre= cre-1;
            }else if(!bet[1]&&bet[0]){
                bet[1] =true;
                bet[2] =true;
                bet1.className = 'bet';
                bet2.className = 'bet';
                cre= cre-2;
            }else if(!bet[2]&&!bet[1]&&!bet[0]){
                bet[0] =true;
                bet[1] =true;
                bet0.className = 'bet';
                bet1.className = 'bet';
                cre= cre-2;
            }
            credit.innerHTML = 'CREDIT<br>'+cre;
        }else if(cre == 1){
            if(bet[2]){
                return;
            }else if(!bet[2]&&bet[1]){
                bet[2] =true;
                bet2.className = 'bet';
                cre=cre-1;
            }else if(!bet[1]&&bet[0]){
                bet[1] =true;
                bet1.className = 'bet';
                cre=cre-1;
            }else if(!bet[2]&&!bet[1]&&!bet[0]){
                bet[0] =true;
                bet0.className = 'bet';
                cre=cre-1;
            }
            credit.innerHTML = 'CREDIT<br>'+cre;
        }else{return;}
        if(!bet[0]&&!bet[1]&&!bet[2]&&cre>=3){
            bet[0] =true;
            bet[1] =true;
            bet[2] =true;
            bet0.className = 'bet';
            bet1.className = 'bet';
            bet2.className = 'bet';
            havCoin -= 3;
            yourCoin.innerHTML='YOUR COIN<br>'+havCoin;
            isStandby = true;
            credit.innerHTML = 'CREDIT<br>'+cre;
        }
        else if(bet[0]&&!bet[1]&&!bet[2]&&cre>=2){
            bet[0] =true;
            bet[1] =true;
            bet[2] =true;
            bet0.className = 'bet';
            bet1.className = 'bet';
            bet2.className = 'bet';
            havCoin -= 2;
            yourCoin.innerHTML='YOUR COIN<br>'+havCoin;
            isStandby = true;
        }
        else if(bet[0]&&bet[1]&&!bet[2]&&cre>=3){
            bet[0] =true;
            bet[1] =true;
            bet[2] =true;
            bet0.className = 'bet';
            bet1.className = 'bet';
            bet2.className = 'bet';
            havCoin -= 1;
            yourCoin.innerHTML='YOUR COIN<br>'+havCoin;
            isStandby = true;
        }
    }

    insButton.addEventListener('click',function(){
        onIns();
    });
    graphButton.addEventListener('click',function(){
        sender();
    });
    var onIns =function(){
        if(cre>=50){
            return;
        }
        if(bet[0]==false){
            havCoin--;
            yourCoin.innerHTML = 'YOUR COIN<br>'+havCoin;
            bet[0]=true;
            bet0.className = 'bet';
            return;
        }else if(bet[1]==false){
            havCoin--;
            yourCoin.innerHTML = 'YOUR COIN<br>'+havCoin;
            bet[1]=true;
            bet1.className = 'bet';
            return;
        }else if(bet[2]==false){
            havCoin--;
            yourCoin.innerHTML = 'YOUR COIN<br>'+havCoin;
            bet[2]=true;
            bet2.className = 'bet';
            isStandby = true;
            return;
        }else{
            cre++;
            credit.innerHTML = 'CREDIT<br>'+cre;
            havCoin--;
            yourCoin.innerHTML = 'YOUR COIN<br>'+havCoin;
        }
    }
    function runSlot(n, panel){
        panel.innerHTML = panels[Math.floor(Math.random()*panels.length)];
        timers[n] = setTimeout(function(){
            runSlot(n, panel)
        }, 50);
    }

    function stopSlot(n, panel, btn){
        if(!isPlaying||results[n]!==undefined ) return;
        btn.className = 'btn inactive';
        clearTimeout(timers[n]);
        results[n] = panel.innerHTML;
        stopCount++;

        if(stopCount===3){
            checkResult();
            timers = [];
            results = [];
            stopCount = 0;
            isPlaying = false;
            bet[0] =false;
            bet[1] =false;
            bet[2] =false;
            spinButton.className = ' ';
            bet0.className = 'bet inactive';
            bet1.className = 'bet inactive';
            bet2.className = 'bet inactive';
            isStandby = false;
        }
    }
    function diffLogic(){
        dif = havCoin+cre-startCoin;
        difCoin.innerHTML = 'DIFF<br>'+dif;
    }
    function saveData(){
        gameData[gameNum-1] = gameNum;
        diffData[gameNum-1] = dif;
        bonData[gameNum-1] = bon;
        localStorage.setItem("gameData",gameData);
        localStorage.setItem("diffData",diffData);
        localStorage.setItem("bonData",bonData);
        diffDatao = localStorage.getItem("diffData");
        gameDatao = localStorage.getItem("gameData");
        bonDatao =  localStorage.getItem("bonData");
        console.log(diffData);
        console.log(gameData);
        console.log(bonData);
    }

    function sender(){
        var f = document.getElementById("formButton");
        document.getElementById("diffsend").value= diffDatao;
        document.getElementById("gamesend").value= gameDatao;
        document.getElementById("bonsend").value= bonDatao;
        //document.forms['form'].elements['diff'].value = diffDatao;
        //document.forms['form'].elements['game'].value = gameDatao;
        f.submit();
    }
    function checkResult(){
        if(results[0] !== results[1] && results[0] !== results[2]) {
            panel0.className = 'panel unmatched';
        }else if(results[1] !== results[2] && results[1] !== results[0]) {
            panel1.className = 'panel unmatched';
        }else if(results[2] !== results[1] && results[2] !== results[0]) {
            panel2.className = 'panel unmatched';
        }else{
            bon ++;
            bonus.innerHTML = 'BONUS<br>'+bon;
            getCoin = 50;
            cre = cre + getCoin;
            if(cre>=50){
                outCoin = cre - 50;
                cre = 50;
            }
                havCoin = havCoin+outCoin;
                yourCoin.innerHTML = 'YOUR COIN<br>'+havCoin;
                credit.innerHTML = 'CREDIT<br>'+cre;
        }
        havCoin+50;
        yourCoin.innerHTML = 'YOUR COIN<br>'+havCoin;
        diffLogic();
        saveData();
    }
})();
