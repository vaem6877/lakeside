// 탑버튼 ======================================================
let topBtn = $("#go-top");

$(window).on("scroll", function () {
  let scrAmt = $(this).scrollTop();

  if (scrAmt > 300) {
    topBtn.fadeIn();
  } else {
    topBtn.fadeOut();
  }
});

topBtn.on("click", function (e) {
  e.preventDefault();
  $("html, body").stop().animate({ scrollTop: 0 }, 300);
});

// 탑버튼 끝 // 윤희 0202 ===========
