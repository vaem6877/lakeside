<?php
require_once('config.php');

$idx = $_POST['idx'];
$name = $_POST['name'];
$content = $_POST['content'];

$sql = "UPDATE lake_bbs SET name='$name', content='$content' WHERE idx='$idx'";
$result = mysqli_query($connect, $sql);

echo "<script>location.replace('../board.php');</script>";

mysqli_close($connect);