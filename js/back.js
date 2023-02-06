$("#datepicker").datepicker({
  dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"], //달력의 요일 부분 텍스트
  showMonthAfterYear: true,
  prevText: "",
  nextText: "",
  minDate: "+d",
  monthNames: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ],
  onSelect: function () {
    var date = $.datepicker.formatDate(
      "yy'.'mm'.'dd",
      $("#datepicker").datepicker("getDate")
    );
    $(".current_book").text(date);
  },
  // showOtherMonths: true,
});

let tabs = $(".tabs li");
content = $("section");

tabs.on("click", function () {
  let targetidx = $(this).index();

  tabs.removeClass("active");
  $(this).addClass("active");

  content.hide();
  content.eq(targetidx).show();
});

/* ======book_data tabs and content json realtime update table===== */

$(function () {
  $("#data_tabs").tabs();
});

let dataBoard = $(".course_content tbody"),
  dataArray = [],
  dataAdd = 0,
  dataLength = 6;

$.getJSON("js/book_data.json", initData);

function initData(result) {
  dataArray = result;
  bookData();
}
function bookData() {
  let tableArray = "";
  for (let i = 0; i < dataArray.length; i++) {
    let dai = dataArray[i];
    for (let ii = 0; ii < dai.time.length; ii++) {
      tableArray += `
      <tr>
        <td>${dai.course}</td>
        <td>${dai.time[ii]}</td>
        <td>${dai.hole}홀</td>
        <td>${dai.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        <td><a href="" class="btn_booking">예약하기</a></td>
       </tr>
     `;
    }
  }

  dataBoard.append(tableArray);
}
