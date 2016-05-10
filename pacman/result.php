<?php
//データを受け取る処理
$user=$_POST['user'];
// $result=$_POST['result'];

CONST PATH = './ranking.json';
if($_SERVER['REQUEST_METHOD']!=='POST'){
    exit('不正なアクセスです');
}
echo "$_POST[user]";
// var_dump(!is_numeric($_POST['result']));
// var_dump($_POST['result']);
if(empty($result)||!is_numeric($result)||empty($user)||!is_string($user)){
    exit('不正なパラメータです');
    //echo "aa";
}
// $result=$_POST['result'];

//現在のランキングを取得する
$ranking = json_decode(file_get_contents(PATH), true);
//$ranking[] = $result;//現在のランクに今回の結果を追加
array_push($ranking,$result);
rsort($ranking);//順番をソート
array_pop($ranking);//一番下を削除
//新しいランキングを保存
file_put_contents(PATH, json_encode($ranking));
// print_r($ranking);
// $file = fopen("STORE_FILE_PATH",a);
// flock($file,LOCK_EX);
// fputs($file,"$ranking")
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>result</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="container">
            <h1 id="result">Ranking Top5!</h1>
            <div id="rankout">
            <?php foreach($ranking as $rank=>$score):?>
                <div class="rank"><?php
                if($rank==0){
                    echo ($rank+1).'<span class="tinyfont">st</span>：';
                }else if($rank==1){
                    echo ($rank+1).'<span class="tinyfont">nd</span>：';
                }else if($rank==2){
                echo ($rank+1).'<span class="tinyfont">rd</span>：';
                }else{
                    echo ($rank+1).'<span class="tinyfont">th</span>：';
                }?>
                <?php echo $score?><span class="tinyfont">points</span></div><br>
                <?php endforeach;?>
            </div>
            <p id="backKey"><a href="pacman.html">Retry!!!!</a></p>
        </div>
    </body>
</html>
