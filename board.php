<?php
session_start();
require_once('php/config.php');
?>


<? include('head.inc')  ?>

    <header class="text-center board_header">

<? include('banner.inc')  ?>

    <main id="board">
    <div class="board_wrapper">
      <div class="container ">
        <div class="search"> 
          <div class="switch_wb">  
            <?php if(isset($_SESSION['id'])) { ?>
            <a href="write.php#write" class="board_common_btn">글쓰기</a>
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
                if(mb_strlen($row['title']) > 18){
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
              <td><a href="view.php?idx=<?=$row["idx"]?>#view"><?= $title ?></a></td>
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
   </div>
    </main>
 
<? include('foot.inc')  ?>


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
    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <script src="js/back.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>
