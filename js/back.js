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

let taps = $(".taps li");
content = $("section");

taps.on("click", function () {
  let targetidx = $(this).index();

  taps.removeClass("active");
  $(this).addClass("active");

  content.hide();
  content.eq(targetidx).show();
});

/* ======book_data taps and content json realtime update table===== */

let dataBoard = $(".course-content tbody"),
  dataAddItemCount = 6, //표시할 개수
  dataAdded = 0, //표시된 개수
  dataAllData = []; //json 파일내 내용을 담을 배열

$.getJSON("js/book_data.js", initDataboard);

function initDataboard(result) {
  dataAllData = result.products;
  console.log(dataAllData);
  addItems(); //목록 추가
}

function addItems() {
  let itemHTML = "",
    slicedData = dataAllData.slice(dataAdded, dataAdded + dataAddItemCount);

  $.each(slicedData, function (i, item) {
    itemHTML += `
    <tr>
        <td>${item.course}</td>
        <td>${item.title}</td>
        <td>${item.hole}</td>
        <td>${item.price}</td>
        <td><a href="" class="btn_booking">예약하기</a></td>
    </tr>      
  `;
  });
  dataBoard.append(itemHTML);
  added += addItemCount;

  if (added < allData.length) {
    loadMoreBtn.show();
  } else {
    loadMoreBtn.hide();
  }
} //addItems
