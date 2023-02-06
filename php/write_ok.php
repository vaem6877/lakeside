<<<<<<< HEAD
<?php
require_once('config.php');
//require_once $_SERVER['DOCUMENT_ROOT'].'/free_board/inc/db.php';
$title = $_POST['title'];
$username = $_POST['name'];
$content = $_POST['content'];
$date = date('Y-m-d');
$userpw = password_hash($_POST['pw'], PASSWORD_DEFAULT);

$sql = "INSERT INTO lake_bbs (title, name, content, date) VALUES('{$title}','{$username}','{$content}','{$date}')";

if($connect->query($sql) === true){
    echo "<script>
    alert('저장성공');
    location.href = '../board.php';
    </script>";
}else{
    echo "Error:" . $connect->error;
}
$connect->close();
?>

=======
<?php
require_once('config.php');
//require_once $_SERVER['DOCUMENT_ROOT'].'/free_board/inc/db.php';
$title = $_POST['title'];
$username = $_POST['name'];
$content = $_POST['content'];
$date = date('Y-m-d');
$userpw = password_hash($_POST['pw'], PASSWORD_DEFAULT);

$sql = "INSERT INTO lake_bbs (title, name, content, date) VALUES('{$title}','{$username}','{$content}','{$date}')";

if($connect->query($sql) === true){
    echo "<script>
    alert('저장성공');
    location.href = '../board.php';
    </script>";
}else{
    echo "Error:" . $connect->error;
}
$connect->close();
?>

>>>>>>> 8ee7bd5a7971d00b8f306d8a4fd64c3896dcf805
