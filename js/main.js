// 메인 이벤트 슬라이드 ===========================================
$(".main-slide").slick({
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
});

$(".controls .next").on("click", () => {
  $(".main-slide").slick("slickNext");
});

$(".controls .prev").on("click", () => {
  $(".main-slide").slick("slickPrev");
});

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

// 코스 fade left, right ========================

AOS.init({
  offset: 200,
  once: true,
  duration: 600,
  easing: "easeInOutCubic",
});
// easeInOutCubic

// ===============

// $("footer .notice .notice-slide").slick({
//   autoplay: true,
//   autoplaySpeed: 2000,
//   vertical: true,
//   arrows: false,
// });
