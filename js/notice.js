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
  sectionsOST = [],
  currentIdx = 0;

asideNav.each(function () {
  let sectionLink = $(this).attr("href");
  sectionsOST.push($(sectionLink).offset().top);
});

wholeSectionWrap.on("mousewheel", function (event) {
  let executed = false;
  if (executed == false) {
    moveSection(event.deltaY);
  }
});

// asideNav.click(function () {});

// ==== function ====
function debounce(callback, time) {
  let executed = false;
  return () => {
    if (!executed) {
      callback();
      executed = true;

      setTimeout(() => {
        executed = false;
      }, time);
    }
  };
}

function moveSection(num) {
  let nextNum = 0;

  if (num == -1 && currentIdx < sectionsOST.length) {
    nextNum = currentIdx + 1;
  } else if (num == 1 && currentIdx > 0) {
    nextNum = currentIdx - 1;
  }

  $("body, html")
    .stop()
    .animate({ scrollTop: sectionsOST[nextNum] }, 300, "easeInOutCirc"); //이 숫자번째만큼 스크롤을 만들어서 넘겨줘
  // jquery ui 아직 로드 안함

  currentIdx = nextNum;
}
