<?php
    session_start();
    require_once('php/config.php');
    $idx = $_GET["idx"];
    $sql = "SELECT * FROM lake_bbs WHERE idx='{$idx}' ";
    $result = mysqli_query($connect, $sql);
?>

<? include('head.inc')  ?>

    <header class="text-center board_header">
   
<? include('banner.inc')  ?>

    <main id="view">
      <div class="view_wrapper container">
        <div class="view_container">
          <div class="view_box">
          <?php
            if($row = mysqli_fetch_array($result)){ ?>
            <h4 class="view_title"><?=$row['title'] ?></h4>
            <p class="view_name"><?=$row['name'] ?></p>
            <p class="view_date"><?=$row['date'] ?></p>
            <article>
              <p>
                <?=$row['content'] ?>
              </p>
            </article>
        <?php
        }
        
        ?>    
          </div>
            <div class="view_btn"> 
                <a href="board.php#board" class="board_common_btn">목록으로</a>
                <? 
                if(isset($_SESSION['id'])){ ?>
                <a href="update.php?idx=<?=$idx?>" class="board_common_btn">수정하기</a>
                <a href="php/delete.php?idx=<?=$idx?>" class="board_common_btn">삭제하기</a>
                <? }
                mysqli_close($connect);
                ?>
                
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
