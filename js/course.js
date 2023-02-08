//홀 설명

document.querySelector("li").removeAttribute("style");

$(function () {
  $("#hole_desc #tabs").tabs();
}); //코스 탭

let courseTab = $("#tabs").find("li"),
  courseBtn = courseTab.find("a");

courseBtn.click(function (item) {
  courseTab.removeClass("active");
  $(this).parents().addClass("active");
});

$(function () {
  $(".swiper #tabs").tabs({
    active: 0,
  });
}); //홀 탭

$("#hole_desc #tabs-east .img_container #tabs-1").html(
  '<img src="img/course_img/동코스1.png" alt="" />'
);

var courseSwiper = new Swiper("#course .swiper", {
  slidesPerView: "6",
  spaceBetween: 30,
  slidesPerGroup: 3,
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
    <img src="img/course_img/${courseName}코스${i}.png" alt="">
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
  makeHoleName.text(holeName);
});

let mix = mixitup(".mix-wrapper", {
  animation: {
    duration: 201,
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
let exitBtn = bigImg.find("i");
console.log(exitBtn);
galleryImg.click(function (e) {
  e.preventDefault();
  let imgSrc = $(this).attr("src");
  let targetImg = bigImg.find("img").attr("src", imgSrc);
  bigImg.show();
});

exitBtn.click(function () {
  console.log("클릭");
  $(this).parent().hide();
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

if (matchMedia("screen and (max-width: 500px)").matches) {
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
let wvOST, hioOST, gallOST;

//스크롤이벤트
let wholeView = $("#course_wv"),
  holeInOne = $("#holeinone"),
  gallary = $("#course_gallery");

setTimeout(() => {
  (wvOST = wholeView.offset().top),
    (hioOST = holeInOne.offset().top),
    (gallOST = gallary.offset().top);
}, 500);

$(window).scroll(function () {
  if ($(window).scrollTop() > wvOST - wvOST / 2) {
    // console.log(wholeView.find("h3").text());
    wholeView.find("h3").animate({ opacity: 1 }, 300);
    wholeView.find("h2").delay(300).animate({ opacity: 1 }, 300);
    wholeView.find("> p").delay(600).animate({ opacity: 1 }, 300);
    wholeView.find(".img_container").delay(1000).animate({ opacity: 1 }, 1000);
    wholeView.find(".img_container span").each(function (idx) {
      setTimeout(() => {
        if (idx % 2 == 0) {
          $(this).stop().animate({ width: "100%" });
        } else {
          $(this).stop().animate({ height: "100%" });
        }
      }, 2000);
    });
  } //코스전경 스크롤
  if ($(window).scrollTop() > gallOST - 500) {
    gallary.find(".mix-wrapper img").each(function (idx) {
      // $(this).css({ opacity: 1 });
      setTimeout(() => {
        $(this).animate({ opacity: 1 });
      }, 100 * idx);
    });
  }

  if ($(window).scrollTop() > hioOST - holeInOne.height() / 2) {
    holeInOne.find("h3").animate({ opacity: 1 }, 300);
    holeInOne.find("h2").delay(400).animate({ opacity: 1 }, 300);
    holeInOne.find("> p").delay(700).animate({ opacity: 1 }, 300);
    setTimeout(() => {
      holeInOne.find("> div >*").css({ transform: "translateX(0px)" });
    }, 1000);
  } //홀인원 스크롤
});
