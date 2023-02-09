
<? include('head.inc')  ?>

    <header class="text-center login_header">

    <? include('banner.inc')  ?>

    <main id="login">
      <div class="login_wrapper">
        <form action="php/login_check.php" method="post" class="login_form">
          <div class="legend">login</div>
          <fieldset>
            <div class="login_field">
              <p>
                <label for="uid" class="hidden">id</label>
                <input
                  type="text"
                  placeholder="아이디를 입력하세요"
                  id="uid"
                  name="uid"
                />
              </p>
              <p>
                <label for="upw" class="hidden">password</label>
                <input
                  type="password"
                  name="upw"
                  id="upw"
                  placeholder="비밀번호를 입력하세요"
                />
              </p>
            </div>
            <button>login</button>
          </fieldset>
          <div class="login_help">
            <span class="desc"
              >회원가입으로 다양한
              <br />
              혜택을 누려보세요!</span
            >
            <div class="btn_help">
              <a href="">회원가입</a> <a href="">아이디/비밀번호 찾기</a>
            </div>
          </div>
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
