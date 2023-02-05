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

// aside nav bar 시작 ================================================

let wholeSectionWrap = $("main"),
  asideNavWrapper = $(".aside-nav"),
  asideNav = asideNavWrapper.find("a"),
  sections = [],
  sectionsOST = [],
  currentIdx = 0,
  targetIdx;

asideNav.each(function () {
  let sectionLink = $(this).attr("href");
  sections.push($(sectionLink));
  sectionsOST.push($(sectionLink).offset().top);
});

asideNav.click(function (e) {
  e.preventDefault();

  targetIdx = $(this).index();

  $("html, body")
    .stop()
    .animate({
      scrollTop: sectionsOST[targetIdx] - 200,
    });
});

// 스크롤양에 따라 보이고 안보임
function btnFade(btn, ost) {
  let scrAmt = $(window).scrollTop();

  if (scrAmt > ost) {
    btn.fadeIn();
  } else {
    btn.fadeOut();
  }
}

$(window).scroll(function () {
  let SCT = $(this).scrollTop();
  btnFade(asideNav, 830);

  $.each(sections, function (idx, item) {
    if (SCT >= item.offset().top - 400) {
      asideNav.removeClass("active");
      asideNav.eq(idx).addClass("active");
    }
  });
});

// ========================= aside bar 끝 // 0204 윤희
