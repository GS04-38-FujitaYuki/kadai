<?php
$diff=$_POST['diff'];
//$game=$_POST['game'];
CONST PATH = './graph.json';
if($_SERVER['REQUEST_METHOD']!=='POST'){
    exit('不正なアクセスです');
}
//echo "$_POST[game]";
var_dump(!is_numeric($_POST['diff']));
var_dump($_POST['diff']);
if(empty($diff)||!is_numeric($diff)/*||empty($game)||!is_string($game)*/){
    exit('不正なパラメータです');
}


 ?>


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>

    </body>
</html>
