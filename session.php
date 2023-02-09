<?php
  session_start();
  if(!isset($_SESSION['id'])) {
      echo "<script>location.replace('login.php');</script>";            
  }
  
  else {
     
      $id = $_SESSION['id'];
      $name = $_SESSION['name'];
  } 
  ?>

<? include('head.inc')  ?>

    <header class="text-center login_header">
 
<? include('banner.inc')  ?>

    <main id="session">
        <div class="session_wrapper">
            <div class="session container text-center">
                <div class="session_title">login info</div>
                <div class="session_info ">
                    <p> 
                        <b>ID : </b>
                        <?php echo "$id"; ?>
                    </p>
                    <p> 
                        <b>Name : </b>
                        <?php echo "$name"; ?>
                    </p>
                    <a href="php/logout.php" class="board_common_btn">LOGOUT</a>
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
