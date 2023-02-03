<?php
$connect = mysqli_connect('localhost', 'kyruth6877', 'kknd4424!', 'kyruth6877');

if(mysqli_connect_errno()){
    echo 'failed'.mysqli_connect_error();
}