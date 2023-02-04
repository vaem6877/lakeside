// 시설안내

let facWrap = $(".facility-wrapper"),
  navBtn = facWrap.find(".facility-nav-wrapper ul li"),
  navImg = facWrap.find(".fac-nav-img-wrapper img"),
  facInfo = facWrap.find(".facility-information .facility-info-wrapper"),
  pager = facWrap.find(".facility-nav-wrapper .fac-pager a");

navBtn.click(function (e) {
  e.preventDefault();
  let tabIdx = $(this).index();

  showSlide(tabIdx);
  // navImg.hide();
  // facInfo.hide();
  // pager.hide();

  // navImg.eq(tabIdx).fadeIn();
  // facInfo.eq(tabIdx).fadeIn();
  // pager.eq(tabIdx).fadeIn();
}); //nav a 클릭시 할일

function showSlide(idx) {
  navBtn.add(navImg).add(facInfo).add(pager).removeClass("active");

  navBtn
    .eq(idx)
    .add(navImg.eq(idx))
    .add(facInfo.eq(idx))
    .add(pager.eq(idx))
    .addClass("active");
}

// ======== aside nav ==============================================

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

// ======= AOS =============================================

AOS.init({
  offset: 200,
  once: true,
  duration: 1000,
  easing: "easeInOutCubic",
});
