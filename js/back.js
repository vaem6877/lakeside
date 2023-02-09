$("#datepicker").datepicker({
  dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"], //달력의 요일 부분 텍스트
  showMonthAfterYear: true,
  prevText: "",
  nextText: "",
  minDate: "+d",
  maxDate: "+4w",
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
$(function () {
  $("#tabs").tabs();
});
/* ======book_data tabs and content json realtime update table===== */
let courseTabs = $(".course_tabs li"),
  dataArray = [];

// console.log(dataBoard.eq(0).html());
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
      <tr class="${dai.type}">
        <td>${dai.course}</td>
        <td>${dai.time[ii]}</td>
        <td>${dai.hole}홀</td>
        <td>${dai.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        <td><a href="" class="btn_booking">예약하기</a></td>
       </tr>
     `;
    }
  }

  $(".course_content tbody").append(tableArray);
}

courseTabs.click(function () {
  let target = $(this).attr("data-course");

  showTable(target);
  courseTabs.removeClass("active");
  $(this).addClass("active");
});
function showTable(cl) {
  if (cl == "all") {
    $(".course_content tbody tr").show();
  } else {
    $(".course_content tbody tr").hide();
    $(cl).css({ display: "table-row" });
  }
}
showTable(".east");
courseTabs.eq(1).trigger("click");
