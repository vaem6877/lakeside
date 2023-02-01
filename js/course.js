let menu = $(".menu"),
  menuBtn = menu.siblings(".button");

menuBtn.click(function () {
  menu.toggleClass("active");
  $(this).toggleClass("active");
});

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

// $('.tab_group').each(function(){
//   $(this).find('#tabs-1')
// })

// let holeList = "";
// let holeImgList = "";

// for (let i = 1; i < 19; i++) {
//   holeList += `<li class="swiper-slide"><a href="#tabs-${i}">${i} HOLE</a></li>`;
//   holeImgList += `
//     <div id="tabs-${i}"></div>
//   `;
// }
// $("#hole_desc .img_container").html(holeImgList);
// $(".swiper-wrapper").html(holeList);

$("#hole_desc #tabs-east .img_container #tabs-1").html(
  '<img src="img/동코스1.svg" alt="" />',
);
//<img src="img/동코스1.svg" alt="" />

var swiper = new Swiper(".swiper", {
  slidesPerView: "6",
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); //홀 스와이퍼

$(".each_course").each(function () {
  let courseName = $(this).attr("data-name"); //동,서,남
  console.log(courseName);
  let holeList = "";
  let holeImgList = "";
  let holeImg = "";

  for (let i = 1; i < 19; i++) {
    holeList += `<li class="swiper-slide"><a href="#tabs-${i}">${i} HOLE</a></li>`;
    holeImgList += `
    <div id="tabs-${i}">
    <img src="img/${courseName}코스${i}.svg" alt="">
    </div>
  `;
  }
  console.log($(this));

  // $(this)
  //   .find(".img_container div")
  //   .each(function () {
  //     let holeNum = $(this).index();
  //     console.log($(this));
  //     if (holeNum % 2 == 0) {
  //       holeImg = `
  //     <img src="img/${courseName}코스1.svg" alt="">
  //   `;
  //       $(".img_container > div").html(holeImg);
  //     } else {
  //       holeImg = `
  //     <img src="img/${courseName}코스2.svg" alt="">
  //   `;
  //       $(".img_container > div").html(holeImg);
  //     } //홀번호에따라 이미지 결정
  //   });
  // $(".img_container > div").html(holeImg);

  $(this).find(".img_container").html(holeImgList);
  $(".swiper-wrapper").html(holeList);
});

// $("#tabs p").eq(0).show();
let swiperSlideBtn = $(".swiper a"),
  imgContainer = $("#hole_desc .img_container > div");

swiperSlideBtn.click(function () {
  // $("#hole_desc #tabs .tab_group p").hide();
  let courseName = $(this).parents("div")[2].dataset.name;
  let makeHoleName = $(".tab_group h2");
  let holeName = $(this).text();
  let holeNum = holeName.substr(0, 2);
  console.log(holeNum);

  // if (holeNum % 2 == 0) {
  //   $(this).parents("#tabs").siblings(".hole1desc").eq(1).show();
  // } else {
  //   $(this).parents("#tabs").siblings("").eq(1).show();
  // }
  // let holeId = $(this).attr("href");
  // let imgSrc = ``;

  // if (holeNum % 2 == 0) {
  //   imgSrc = `
  //   <img src="img/${courseName}코스2.svg" alt="" />
  //   `;
  // } else {
  //   imgSrc = `
  //   <img src="img/${courseName}코스1.svg" alt="" />
  //   `;
  // }

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

// if (matchMedia("screen and (max-width: 360px)").matches) {
//   let target = $("#select_course");
//   target.change(function () {
//     let targetVal = $(this).val();
//     console.log(targetVal);
//   });
//   console.log(target);
//   let selectCourse = "";
//   $("#tabs > ul li").each(function () {
//     selectCourse = $(this).html();
//   });
//   let dropdownHTML = `
//   <select id="select_course" name="select_course">
//     <option value="east">EAST Course</option>
//     <option value="west">WEST Course</option>
//     <option value="south">SOUTH Course</option>
//   </select>`;
//   $("#tabs").prepend(dropdownHTML);
//   $("#salutation").selectmenu();
// }
