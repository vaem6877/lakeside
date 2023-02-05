// 시설안내

let facWrap = $(".facility-wrapper"),
  navUl = facWrap.find(".facility-nav-wrapper ul"),
  navBtn = facWrap.find(".facility-nav-wrapper ul li"),
  navBar = facWrap.find("#bar"),
  navImg = facWrap.find(".fac-nav-img-wrapper img"),
  facInfo = facWrap.find(".facility-information .facility-info-wrapper"),
  pager = facWrap.find(".facility-nav-wrapper .fac-pager a");

navBtn.eq(0).add(pager.eq(0)).addClass("active");

navBtn.click(function (e) {
  e.preventDefault();
  let tabIdx = $(this).index();
  let liOSL = $(this).offset().left - navUl.offset().left;
  // console.log(liOSL);
  showSlide(tabIdx);

  // navBar.css({ left: liOSL - 0.021 * navBtn.offset().left });
  navBar.css({ left: liOSL - 0.022 * navBtn.offset().left });

  // 왜지??????????? 픽셀이나 퍼센트 쓰면 안움직이고... 그냥쓰면움직임???;;
  // 이거 가운데로 어케오게하니...
  // , width: navBtn.outerwidth()
  //, transform: `translateX(${navBtn.width() / 2})`
  // if (tabIdx < 2) {
  //   navBar.css({ left: liOSL - 25 });
  // } else {
  //   navBar.css({ left: liOSL });
  // }

  // navImg.hide();
  // facInfo.hide();
  // pager.hide();

  // navImg.eq(tabIdx).fadeIn();
  // facInfo.eq(tabIdx).fadeIn();
  // pager.eq(tabIdx).fadeIn();
}); //nav a 클릭시 할일

function showSlide(idx) {
  navImg.add(facInfo).hide();
  navBtn.add(pager).removeClass("active");
  /*
  navBtn
    .eq(idx)
    .add(navImg.eq(idx))
    .add(facInfo.eq(idx))
    .add(pager.eq(idx))
    .addClass("active");*/

  navBtn.eq(idx).add(pager.eq(idx)).addClass("active");
  navImg.eq(idx).add(facInfo.eq(idx)).fadeIn();
}
/*
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
*/
// ========================= aside bar 끝 // 0204 윤희
// ======= AOS =============================================

AOS.init({
  offset: 200,
  once: true,
  duration: 800,
  easing: "easeInOutCubic",
  disable: "phone", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
});
