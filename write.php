<? include('head.inc')  ?>
    
    <header class="text-center board_header">

<? include('banner.inc')  ?>    

    <main id="write">
      <div class="write_wrapper">
        <form action="php/write_ok.php" method="POST" class="write_form">
          <fieldset>
            <div class="write_field">
              <p>
                <label for="title" class="hidden">제목:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="제목"
                  required
                  maxlength="100"
                />
              </p>
              <p>
                <label for="name" class="hidden">이름:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="이름"
                  required
                  maxlength="100"
                />
              </p>
              <p>
                <label for="content" class="hidden">내용:</label>
                <textarea
                  name="content"
                  id="content"
                  cols="22"
                  rows="8"
                  required
                ></textarea>
              </p>
            </div>
            <p></p>
          </fieldset>
          <button class="board_common_btn">글작성</button>
        </form>
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
