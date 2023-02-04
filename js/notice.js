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
console.log(sections);

asideNav.click(function (e) {
  e.preventDefault();

  // asideNav.each(function () {
  //   let sectionLink = $(this).attr("href");
  //   sectionsOST.push($(sectionLink).offset().top);
  // });
  targetIdx = $(this).index();
  // targetSCT = $contents.eq(targetIdx).offset().top;

  // asideNav.removeClass("active");
  // $(this).addClass("active");

  $("html, body")
    .stop()
    .animate({
      scrollTop: sectionsOST[targetIdx] - 200,
    });
});

console.log(sections);

// wholeSectionWrap.on("mousewheel", function (event) {
//   debounce(moveSection(event.deltaY), 300);
// });

// asideNav.click(function () {});

// 스크롤양에 따라 보이고 안보임
function btnFade(btn, ost) {
  let scrAmt = $(window).scrollTop();

  if (scrAmt > ost) {
    btn.fadeIn();
  } else {
    btn.fadeOut();
  }
}

// $(window).scroll(function () {
//   btnFade(asideNavWrapper, 2000);
// });
// console.log(targetIdx);

$(window).scroll(function () {
  let SCT = $(this).scrollTop();
  btnFade(asideNav, 830);
  // console.log(sectionsOST);

  // sections.each(function (i) {
  //   if (SCT >= $(this).offset().top) {
  //     asideNav.removeClass("active");
  //     asideNav.eq(i).addClass("active");
  //   }
  // }); //그냥 숫자들이라 뭘 못하는건가???

  // if (SCT >= sectionsOST[targetIdx]) {
  //   asideNav.removeClass("active");
  //   asideNav.eq(targetIdx).addClass("active");
  // }

  // if(scrAmt > sectionsOST[targetIdx]){

  //   }
  // each 사용법 다른거...
  //   $.each(arrVal, function(index, element){
  // 	console.log(index + " :: " + element);
  // });
  $.each(sections, function (idx, item) {
    // console.log($("#history"));
    // console.log(sections);
    console.log(SCT);

    // if(SCT <)
    /* 
        if (SCT < item[3]) {
      if (SCT >= item.offset().top - 500) {
        asideNav.removeClass("active");
        asideNav.eq(idx).addClass("active");
      }
    } else {
      if (SCT >= item.offset().top) {
        asideNav.removeClass("active");
        asideNav.eq(idx).addClass("active");
      }
    } */
    if (SCT >= item.offset().top - 400) {
      asideNav.removeClass("active");
      asideNav.eq(idx).addClass("active");
    }
  });
});

// ==== function ====

// 한번만 실행
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

// 풀페이지 이동
// function moveSection(num) {
//   let nextNum = 0;

//   if (num == -1 && currentIdx < sectionsOST.length) {
//     nextNum = currentIdx + 1;
//   } else if (num == 1 && currentIdx > 0) {
//     nextNum = currentIdx - 1;
//   }

//   $("body, html").stop().animate({ scrollTop: sectionsOST[nextNum] }, 300); //이 숫자번째만큼 스크롤을 만들어서 넘겨줘
//   // jquery ui 아직 로드 안함 , "easeInOutCirc"

//   currentIdx = nextNum;
// }

// ======= AOS =============================================

AOS.init({
  offset: 200,
  once: true,
  duration: 1000,
  easing: "easeInOutCubic",
});
