(function(){
    'use strict';
    var panels = ['(^^)','(; ;)','(>_<)'];
    var timers = [];
    var results = [];
    var stopCount = 0;
    var isPlaying = false;
    var insCoin =3;
    var havCoin = 100;
    var gameNum = 0;
    var bet = [false, false ,false];
    var isStandby = false;
    var dif = 0;
    var cre = 0;
    var payo = 0;
    var bon = 0;

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


    game.innerHTML = 'GAME<br>'+gameNum;
    yourCoin.innerHTML = 'YOUR COIN<br>'+havCoin;
    credit.innerHTML = 'CREDIT<br>'+cre;
    payout.innerHTML = 'PAYOUT<br>'+payo;
    bonus.innerHTML = 'BONUS<br>'+bon;
    difCoin.innerHTML = 'DIFF<br>'+dif;
    spinButton.addEventListener('click',function(){
        if(isPlaying||isStandby==false)return;
        isPlaying = true;
        gameNum ++;
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
    });
    btn0.addEventListener('click', function(){
        stopSlot(0, panel0, this);
    });
    btn1.addEventListener('click', function(){
        stopSlot(1, panel1, this);
    });
    btn2.addEventListener('click', function(){
        stopSlot(2, panel2, this);
    });

    maxbet.addEventListener('click',function(){
        if(cre=>3){
            cre = cre -3;
        }else if(cre == 2){
            cre = cre -2;
        }else if(cre == 1){
            cre = cre -1;
        }else{return;}
        if(!bet[0]&&!bet[1]&&!bet[2]){
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
        else if(bet[0]==true&&bet[1]==false&&bet[2]==false){
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
        else if(bet[0]==true&&bet[1]==true&&bet[2]==false){
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
    });
    insButton.addEventListener('click',function(){
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
    });
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
    function checkResult(){
        if(results[0] !== results[1] && results[0] !== results[2]) {
            panel0.className = 'panel unmatched';
        }
        else if(results[1] !== results[2] && results[1] !== results[0]) {
            panel1.className = 'panel unmatched';
        }
        else if(results[2] !== results[1] && results[2] !== results[0]) {
            panel2.className = 'panel unmatched';
        }
    }
})();
