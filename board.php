<?php
session_start();
require_once('php/config.php');

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
    <header class="text-center board_header">
      <h1 id="logo"><a href="#">lakeside</a></h1>
      <div class="widget"></div>
      <!-- <div class="icon_mouse">
        <img src="img/common/icon_mouse.svg" alt="" />
      </div> -->
    </header>
    <main class="board_wrapper">
      <div class="container">
        <div class="search"> 
          <div class="switch_wb">  
            <?php if(isset($_SESSION['id'])) { ?>
            <a href="write.html" class="write_btn">글쓰기</a>
            <?php } ?>
         </div>
          <form action="">
            <select name="" id="">
              <option value="">제목</option>
              <option value="">등록자</option>
            </select>
            <input type="text" />
            <button>검색</button>
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>등록자</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
          <?php
                $sql = "SELECT * FROM lake_bbs ORDER BY idx DESC LIMIT 0,10";
                $result = $connect->query($sql);
                while ($row = $result->fetch_assoc()) {
                if(mb_strlen($row['title']) > 10){
                    $title = mb_substr($row['title'], 0, 10, 'utf-8').'...';
                    //$title = str_replace($row['title'], mb_substr($row['title'], 0, 10, 'utf-8').'...', $row['title']);
                   
                    

                } else{
                    $title = $row['title'];
                }
                //print_r($row); 
                //echo ($row['title']);
            ?>
            <tr>
              <td><?= $row['idx'] ?></td>
              <td><a href=""><?= $title ?></a></td>
              <td><?= $row['name'] ?></td>
              <td><?= $row['date'] ?></td>
            </tr>
          
            <?php  } ?>
          </tbody>
        </table>
        <div class="pagination">
          <i class="fa-solid fa-chevron-left"></i>
          <ol>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ol>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
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
  </body>
</html>
