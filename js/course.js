//홀 설명

document.querySelector("li").removeAttribute("style");

$(function () {
  $("#hole_desc #tabs").tabs({
    active: 0,
  });
}); //코스 탭

let courseTab = $("#tabs").find("li"),
  courseBtn = courseTab.find("a");

courseBtn.click(function () {
  courseTab.removeClass("active");
  $(this).parents().addClass("active");
});

$(function () {
  $(".swiper #tabs").tabs({
    active: 0,
  });
}); //홀 탭

// $(".ui-tabs-tab").each(function () {
//   $(this).click(function () {});
// });

$("#hole_desc #tabs-east .img_container #tabs-1").html(
  '<img src="img/course_img/동코스1.svg" alt="" />'
);
//<img src="img/동코스1.svg" alt="" />

var courseSwiper = new Swiper("#course .swiper", {
  slidesPerView: "6",
  spaceBetween: 40,
  navigation: {
    nextEl: "#course .swiper-button-next",
    prevEl: "#course .swiper-button-prev",
  },
}); //홀 스와이퍼

$("#course .each_course").each(function () {
  let courseName = $(this).attr("data-name"); //동,서,남
  console.log(courseName);
  let holeList = "";
  let holeImgList = "";
  let holeImg = "";

  for (let i = 1; i < 19; i++) {
    holeList += `<li class="swiper-slide"><a href="#tabs-${i}">${i}<span> HOLE</span></a></li>`;
    holeImgList += `
    <div id="tabs-${i}">
    <img src="img/course_img/${courseName}코스${i}.svg" alt="">
    </div>
  `;
  }
  console.log($(this));

  $(this).find("#tabs .img_container").html(holeImgList);
  $("#course .swiper-wrapper").html(holeList);
});

let swiperSlideBtn = $(".swiper a"),
  imgContainer = $("#hole_desc .img_container > div");

swiperSlideBtn.click(function () {
  // $("#hole_desc #tabs .tab_group p").hide();
  let courseName = $(this).parents("div")[2].dataset.name;
  let makeHoleName = $(".tab_group h2");
  let holeName = $(this).text();
  let holeNum = holeName.substr(0, 2);
  console.log(holeNum);

  console.log(courseName);
  // console.log(holeName);
  // console.log(holeId);
  // console.log(holeNum);
  // imgContainer.html(imgSrc);
  makeHoleName.text(holeName);
  // imgContainer.text("이미지");
});

let mix = mixitup(".mix-wrapper", {
  animation: {
    duration: 391,
    nudge: false,
    reverseOut: false,
    effects: "scale(0.01)",
  },
}); //코스갤러리 필터

let courseGallery = $("#course_gallery"),
  courseGalleryBtn = courseGallery.find("button");

courseGalleryBtn.click(function () {
  courseGalleryBtn.removeClass("active");
  $(this).addClass("active");
}); //코스갤러리 각 코스버튼 클릭시 active

let galleryImg = courseGallery.find("img");
let bigImg = courseGallery.find(".course_img_big");
let exitBtn = courseGallery.find("i");

galleryImg.click(function (e) {
  e.preventDefault();
  let imgSrc = $(this).attr("src");
  let showImg = `<img src="${imgSrc}" alt="" />`;
  bigImg.append(showImg);
  bigImg.show();
});

exitBtn.click(function () {
  bigImg.hide();
});

//반응형

if (matchMedia("screen and (max-width: 768px)").matches) {
  let swiper = new Swiper(".swiper", {
    slidesPerView: "6",
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

if (matchMedia("screen and (max-width: 360px)").matches) {
  $("#hole_desc #tabs ul li a span").hide();
  let swiper = new Swiper(".swiper", {
    slidesPerView: "5",
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let pointer = `<i class="fa-regular fa-hand-pointer"></i>`;
  let pointerTarget = $("#tabs .swiper");
  pointerTarget.append(pointer);
}

//스크롤이벤트
let wholeView = $("#course_wv"),
  wvOST = wholeView.offset().top;
console.log(wvOST);

$(window).scroll(function () {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() > wvOST - wvOST / 2) {
    // console.log(wholeView.find("h3").text());
    wholeView.find("*").each(function (idx) {
      $(this)
        .delay(300 * idx)
        .stop()
        .animate({ opacity: 1 });
    });
  }
});
