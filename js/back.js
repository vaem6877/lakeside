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
