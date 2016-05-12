<?php
$diff=$_POST['diff'];
$game=$_POST['game'];
$bonus=$_POST['bonus'];
//$game=$_POST['game'];
CONST PATH = './graph.json';
if($_SERVER['REQUEST_METHOD']!=='POST'){
    exit('不正なアクセスです');
}

echo $diff;
echo $game;
echo $bonus;
// var_dump(!is_numeric($_POST['diff']));
// var_dump($_POST['diff']);
// var_dump(!is_numeric($_POST['game']));
// var_dump($_POST['game']);
if(empty($diff)||empty($game)){
    exit('不正なパラメータです');
}
// echo json_encode($diff);
// echo json_encode($game);

   //2. DB接続します
   $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost','root','');

   // for($i = 0; i < count($game);++$i){
   //     //３．データ登録SQL作成
   //     $stmt = $pdo->prepare("INSERT INTO slot_table(game,diff,bonus)VALUES(game,diff,bonus");
   //     $stmt->bindValue(':game', $game[$i]);
   //     $stmt->bindValue(':diff', $diff[$i]);
   //     $stmt->bindValue(':bonus', $bonus[$i]);
   //     $status = $stmt->execute();
   // }
   //


   //４．データ登録処理後
 //   if($status==false){
 //     //Errorの場合$status=falseとなり、エラー表示
 //     echo "SQLエラー";
 //     exit;
 //   }else{
 //     //５．index.phpへリダイレクト
 //    //  header("Location: index.php");
 //    //  exit;
 // }
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
        <canvas id="canvas"></canvas>
        <script id="script" src="graph.js"
        data-diff='<?php echo json_encode($diff); ?>'
        data-game='<?php echo json_encode($game); ?>'
        data-bonus='<?php echo json_encode($bonus);?>'
        >
        </script>

    </body>
</html>
