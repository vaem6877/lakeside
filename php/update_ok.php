<?php
require_once('config.php');

$idx = $_POST['idx'];
$title = $_POST['title'];
$name = $_POST['name'];
$content = $_POST['content'];

$sql = "UPDATE lake_bbs SET title='$title',name='$name', content='$content' WHERE idx='$idx'";
$result = mysqli_query($connect, $sql);

echo "<script>location.replace('../board.php');</script>";

mysqli_close($connect);