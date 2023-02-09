<?php
require_once('config.php');
$idx = $_GET['idx'];
$sql = "DELETE FROM lake_bbs WHERE idx = '$idx'";
$result = mysqli_query($connect, $sql);

if(!$result){
    print_r(mysqli_error($connect));
}else{
echo "<script>location.replace('../board.php#board');</script>";


}

mysqli_close($connect);
