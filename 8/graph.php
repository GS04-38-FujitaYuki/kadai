<?php
$diff=$_POST['diff'];
$game=$_POST['game'];
$bonus=$_POST['bonus'];
// var_dump($diff);
// var_dump($game);
// var_dump($bonus);
//$game=$_POST['game'];
// CONST PATH = './graph.json';
if($_SERVER['REQUEST_METHOD']!=='POST'){
    exit('不正なアクセスです');
}

// var_dump(!is_numeric($_POST['diff']));
// var_dump($_POST['diff']);
// var_dump(!is_numeric($_POST['game']));
// var_dump($_POST['game']);
if(empty($diff)||empty($game)){
    exit('不正なパラメータです');
}
$diff = explode(",", $diff);
$game = explode(",", $game);
$bonus = explode(",", $bonus);

// $diff = intval($diff);
// $game = intval($game);
// $bonus = intval($bonus);
for($i = 0; $i<count($diff) ; $i++){
    $diff[$i] = (intval($diff[$i]));
    $game[$i] = (intval($game[$i]));
    $bonus[$i] = (intval($bonus[$i]));
}
 // var_dump($diff);
// echo json_encode($diff);
// echo json_encode($game);

   // DB接続
   $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost','root','');
   //データ登録SQL作成
   $stmt = $pdo->prepare("INSERT INTO slot_table(game, diff, bonus) VALUES (:game,:diff,:bonus)");

  for($i = 0; $i < count($game);$i++){
       $stmt->bindValue(':game', $game[$i]);
       $stmt->bindValue(':diff', $diff[$i]);
       $stmt->bindValue(':bonus', $bonus[$i]);
       $status = $stmt->execute();
   }

   //４．データ登録処理後
   if($status==false){
    //Errorの場合$status=falseとなり、エラー表示
    //   echo "SQLエラー";
    //exit;
   }else{
     //５．index.phpへリダイレクト
   // header("Location: graph.php");
   //  exit;
  }
 ?>
<!DOCTYPE html>
<html>
    <head>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css"></link>
        <title></title>
    </head>
    <body>
        <div id="graphArea">
            <canvas id="canvas"></canvas>
        </div>
        <form id="back" name="form" action="index.html" method="post">
            <div id="backBtn">back
               <input id="diffBack" type='hidden' name='diffBack' value=''>
               <input id="gameBack" type='hidden' name='gameBack' value=''>
               <input id="bonBack" type='hidden' name='bonusBack' value=''>
           </div>
       </form>
        <script id="script" src="graph.js"
        data-diff='<?php echo json_encode($diff); ?>'
        data-game='<?php echo json_encode($game); ?>'
        data-bonus='<?php echo json_encode($bonus);?>'
        ></script>
    </body>
</html>
