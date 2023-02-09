// 메인 이벤트 슬라이드 ===========================================
$(".main-slide").slick({
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".controls .next").on("click", () => {
  $(".main-slide").slick("slickNext");
});

$(".controls .prev").on("click", () => {
  $(".main-slide").slick("slickPrev");
});

/*

// 탑버튼 ======================================================
let topBtn = $("#go-top");
// let section = $(".course-desc");
let mobileBtn = $(".course-desc .mobile-btn"); // 모바일 버튼
// let sectionOST;
// section.each(function () {
//   let sectionOST = $(this).offset().top;
// });
// console.log(sectionOST);
$(window).on("scroll", function () {
  btnFade(topBtn, 300);

  // if($(this).scrollTop() > )
});

function btnFade(btn, ost) {
  let scrAmt = $(this).scrollTop();

  if (scrAmt > ost) {
    btn.fadeIn();
  } else {
    btn.fadeOut();
  }
}

topBtn.on("click", function (e) {
  e.preventDefault();
  $("html, body").stop().animate({ scrollTop: 0 }, 300);
});

// 탑버튼 끝 =========== */

// topBtn.click(function (e) {
//   e.preventDefault();
//   $("html, body").stop().animate({ scrollTop: 0 }, 300);
// });

// 코스 fade left, right ========================

AOS.init({
  offset: 200,
  once: true,
  duration: 1000,
  easing: "easeInOutCubic",
  disable: "mobile",
});
// easeInOutCubic

// ===============

$("footer .notice .notice-slide").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  vertical: true,
  arrows: false,

  // {
  //   breakpoint: 600,
  //   settings: {
  //     slidesToShow: 2,
  //     slidesToScroll: 2
  //   }
  // },
  // {
  //   breakpoint: 480,
  //   settings: {
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  //   }
  // }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  // ],
});

// ===== 메인 모바일 btn

if (matchMedia("screen and (max-width: 500px)").matches) {
  let mainCourse = $(".main-course"),
    courseSections = mainCourse.find("> div div[class*=course]");
  $(window).scroll(function () {
    let wins = $(this).scrollTop();

    courseSections.each(function () {
      if ($(this).offset().top - 400 < wins) {
        $(this).addClass("active");
      }
    });
  });
} else {
  courseSections.removeClass("active");
}
