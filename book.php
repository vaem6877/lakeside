<? include('head.inc')  ?>
  
  
  <header class="text-center book_header">
  <? include('banner.inc')  ?>

    <main id="book">
      <div class="book_wrapper">
        <div id="tabs" class="container mb-5 mt-5">
          <ul class="tabs row">
            <li class="col">
              <a href="#tabs-1">실시간예약</a>
            </li>
            <li class="col">
              <a href="#tabs-2"> 패키지예약</a>
            </li>
            <li class="col">
              <a href="#tabs-3">대기예약</a>
            </li>
            <li class="col">
              <a href="#tabs-4">예약조회&amp;변경</a>
            </li>
          </ul>
          <section id="tabs-1" class="rtbook row text-start">
            <aside class="col-xl-5 col-xs-auto">
              <div class="book_cal">
                <div
                  class="cal_head d-flex justify-content-between align-items-end"
                >
                  <h4>예약일자</h4>
                  <div class="book_noti">
                    <span><i></i> 오늘</span><span>예약가능</span
                    ><span>예약마감</span>
                  </div>
                </div>
                <div id="datepicker"></div>
              </div>
              <div class="book_time">
                <h4>예약시간</h4>
                <div>
                  <dl>
                    <dt>예약자명</dt>
                    <dd>조휴일</dd>
                  </dl>
                  <dl>
                    <dt>예약일자</dt>
                    <dd class="current_book">2023.01.25</dd>
                  </dl>
                  <p>카트비, 캐디피는 별도입니다.</p>
                  <p>카트비 팀당 10만원</p>
                  <p>예약자는 반드시 신분증 지참하여 주시기 바랍니다.</p>
                  <p>예약 확정은 고객님의 핸드폰 메세지로 전송됩니다.</p>
                </div>
              </div>
            </aside>
            <div id="data_tabs" class="col-xl-7 col-xs-auto">
              <h4>코스 선택</h4>
              <ul class="course_tabs row g-0">
                <li class="col" data-course="all">전체코스</li>
                <li class="col active" data-course=".east">동코스</li>
                <li class="col" data-course=".west">서코스</li>
                <li class="col" data-course=".south">남코스</li>
              </ul>
              <div class="course_content">
                <table>
                  <thead>
                    <tr>
                      <th>코스</th>
                      <th>시간</th>
                      <th>홀</th>
                      <th>요금</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </section>
          <section id="tabs-2" class="book_uc">
            <p>패키지예약<br />준비중입니다.</p>
          </section>
          <section id="tabs-3" class="book_uc">
            <p>대기예약<br />준비중입니다.</p>
          </section>
          <section id="tabs-4" class="book_uc">
            <p>조회변경 <br />준비중입니다.</p>
          </section>
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
