<?php
session_start();

$uid = $_POST['uid'];
$upw = $_POST['upw'];

include 'config.php';
    $sql = "SELECT * FROM lake_login WHERE tb_id ='$uid' AND tb_pw = '$upw'";
    $result = $connect->query($sql);
    $row = $result->fetch_array(MYSQLI_ASSOC);

    if($row !=null){
        $_SESSION['id'] = $row['tb_id'];
        $_SESSION['name'] = $row['tb_name'];
        echo "<script>alert('아이디나 패스워드가 일치합니다.')</script>";
        echo "<script>location.replace('../session.php');</script>";
        exit;
    }
    else{
        echo "<script>alert('아이디나 패스워드가 잘못됐습니다.')</script>";
        echo "<script>location.replace('../login.html');</script>";
        exit;
    }
?>
