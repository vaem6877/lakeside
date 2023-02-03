<?php
  session_start();
  if(!isset($_SESSION['id'])) {
      echo "<script>alert('세션감지실패');</script>";
      echo "<script>location.replace('login.html');</script>";            
  }
  
  else {
    echo "<script>alert('세션감지성공');</script>";          
      $id = $_SESSION['id'];
      $name = $_SESSION['name'];
  } 
  ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>lakeside - board</title>
    <link
      rel="stylesheet"
      href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/back.css" />
  </head>
  <body>
    <header class="text-center book_header">
      <h1 id="logo"><a href="#">lakeside</a></h1>
      <div class="widget"></div>
    </header>
    <main>
    <h2>
        <?php 
        echo "$id($name)";
        ?>
    </h2>
    <a href="php/logout.php">LOGOUT</a>
    <a href="board.php">BOARD</a>
    </main>

<footer>
  <div class="terms d-flex justify-content-center">
    <a href="">이용약관</a>
    <a href="">웹회원 약관</a>
    <a href="">개인정보처리방침</a>
    <a href="">영상정보처리기기 방침</a>
    <a href="">사업자정보확인</a>
    <a href="">사이트맵</a>
  </div>
  <a href="index.html" class="footer-logo text-center">logo</a>

  <address class="">
    <dl class="d-flex justify-content-center">
      <dt>주소 :</dt>
      <dd>16887 경기도 용인시 처인구 모현읍 능원로 181</dd>
      <dt>대표전화 :</dt>
      <dd>031-334-2111</dd>
      <dt>팩스 :</dt>
      <dd>031-332-2106</dd>
    </dl>
    <dl class="d-flex justify-content-center">
      <dt>팩스 :</dt>
      <dd>031-332-2106</dd>
      <dt>이메일 :</dt>
      <dd>lakeside@lakeside.kr</dd>
    </dl>
    <dl class="d-flex justify-content-center">
      <dt>사업자등록번호</dt>
      <dd>135-81-02491</dd>
      <dt>통신판매신고</dt>
      <dd>제 2009-용인처인-0170호</dd>
      <dt>대표이사</dt>
      <dd>문지태</dd>
    </dl>
    <p class="text-uppercase text-center">
      copyright lakeside country club. all rights reserved
    </p>
  </address>
</footer>
<script
  src="https://code.jquery.com/jquery-3.6.3.min.js"
  integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
  crossorigin="anonymous"
></script>
<script
  src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"
  integrity="sha256-lSjKY0/srUM9BE3dPm+c4fBo1dky2v27Gdjm2uoZaL0="
  crossorigin="anonymous"
></script>
<script src="js/back.js"></script>
</body>
</html>
