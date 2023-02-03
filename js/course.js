//메뉴

let menu = $(".menu"),
  menuBtn = menu.find(".button");

menuBtn.click(function () {
  menu.toggleClass("active");
  $(this).toggleClass("active");
});

//위젯

var widgetSwiper = new Swiper(".widget_box .swiper", {
  slidesPerView: 5,
  spaceBetween: 3,
  setWrapperSize: true,
  navigation: {
    nextEl: ".widget_box .swiper-button-next",
    prevEl: ".widget_box .swiper-button-prev",
  },
});
let target = $(".widget_box .swiper-wrapper");
//홀 스와이퍼

let newDate = new Date();
let year = newDate.getFullYear(); // 년도
let month = newDate.getMonth() + 1; // 월
let date = newDate.getDate(); // 날짜
let day = newDate.getDay(); // 요일
let korWeek = new Array("일", "월", "화", "수", "목", "금", "토");
let today = `${year}-0${month}-${date}`;
console.log(date);

let weatherIcon = {
  "01d": "fa-sun",
  "01n": "fa-moon",
  "02d": "fa-cloud-sun",
  "02n": "fa-cloud-moon",
  "03d": "fa-cloud",
  "03n": "fa-cloud",
  "04d": "fa-cloud",
  "04n": "fa-cloud",
  "09d": "fa-cloud-showers-heavy",
  "09n": "fa-cloud-showers-heavy",
  "10d": "fa-cloud-sun-rain",
  "10n": "fa-cloud-moon-rain",
  "11d": "fa-cloud-bolt",
  "11n": "fa-cloud-bolt",
  "13d": "fa-snowflake",
  "13n": "fa-snowflake",
  "50d": "fa-cloud-fog",
  "50n": "fa-cloud-fog",
};

let Temp = "";
let TempArr = [];
let iconArr = [];

$.getJSON(
  "http://api.openweathermap.org/data/2.5/forecast?lat=37.5683&lon=126.9778&appid=6683b822924895deb0d2f90cf228a02e&units=metric",
  function (result) {
    console.log(result);
    let list = result.list;
    console.log(list);
    let convertDate = "";
    let korWeek = ["일", "월", "화", "수", "목", "금", "토"];
    list.map((item) => {
      let newDate = new Date(item.dt * 1000);
      let year = newDate.getFullYear(); // 년도
      function add0(n) {
        return n < 10 ? "0" + n : n;
      }
      let month = newDate.getMonth() + 1; // 월
      let date = newDate.getDate(); // 날짜
      let day = newDate.getDay(); // 요일
      let hour = newDate.getHours();
      let minutes = newDate.getMinutes();
      let seconds = newDate.getSeconds();
      let time = `${add0(hour)}:${add0(minutes)}:${add0(seconds)}`;
      convertDate = `${add0(year)}-${add0(month)}-${add0(date)} ${time}`;
      console.log(convertDate);
      item.dt = convertDate;
    });
    // $.each(list, function (i) {
    // let newDate = new Date(list[i].dt * 1000);
    // function add0(n) {
    //   return n < 10 ? "0" + n : n;
    // }
    // let year = newDate.getFullYear(); // 년도
    // let month = newDate.getMonth() + 1; // 월
    // let date = newDate.getDate(); // 날짜
    // let day = newDate.getDay(); // 요일
    // let hour = newDate.getHours();
    // let minutes = newDate.getMinutes();
    // let seconds = newDate.getSeconds();
    // let time = `${add0(hour)}:${add0(minutes)}:${add0(seconds)}`;
    // convertDate = `${add0(year)}-${add0(month)}-${add0(date)} ${time}`;
    // console.log(convertDate);
    // list.map((item) => {
    //   let newDate = new Date(item.dt * 1000);
    //   let year = newDate.getFullYear(); // 년도
    //   function add0(n) {
    //     return n < 10 ? "0" + n : n;
    //   }
    //   let month = newDate.getMonth() + 1; // 월
    //   let date = newDate.getDate(); // 날짜
    //   let day = newDate.getDay(); // 요일
    //   let hour = newDate.getHours();
    //   let minutes = newDate.getMinutes();
    //   let seconds = newDate.getSeconds();
    //   let time = `${add0(hour)}:${add0(minutes)}:${add0(seconds)}`;
    //   convertDate = `${add0(year)}-${add0(month)}-${add0(date)} ${time}`;
    //   console.log(convertDate);
    //   item.dt = convertDate;
    // });
    // });

    // $.each(list, function (i) {
    //   let dateList = list[i].dt;
    //   console.log(dateList);
    //   // console.log(dateList);
    //   function add0(n) {
    //     return n < 10 ? "0" + n : n;
    //   }
    //   let year = dateList.getFullYear(); // 년도
    //   let month = dateList.getMonth() + 1; // 월
    //   let date = dateList.getDate(); // 날짜
    //   let day = dateList.getDay(); // 요일
    //   let hour = dateList.getHours();
    //   let minutes = dateList.getMinutes();
    //   let seconds = dateList.getSeconds();
    //   let time = `${add0(hour)}:${add0(minutes)}:${add0(seconds)}`;
    //   let convertDate = `${add0(year)}-${add0(month)}-${add0(date)} ${time}`;
    //   console.log(convertDate);
    // });

    // console.log(list);
    // $.each(list, function (i) {
    //   console.log(list[i].dt_txt);
    //   let convertDate = new Date(list[i].dt * 1000);
    //   console.log(convertDate);
    //   // console.log(newDate);
    // });

    const filteredDay = list.reduce((acc, current) => {
      let convertDateACC = new Date(acc.dt * 1000);
      // console.log(acc);
      // console.log(acc);
      // console.log(current);
      const x = acc.find(
        (item) => item.dt.substr(0, 10) === current.dt.substr(0, 10)
      );
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    console.log(filteredDay);

    let date = "";
    let dateList = [];
    $.each(filteredDay, function (i) {
      date = filteredDay[i].dt.substr(0, 10); // 각 날짜(년-월-일)

      dateList.push(date);

      let day = filteredDay[i].dt.substr(8, 2); //각 날짜의 일
      let korDay = korWeek[new Date(dateList[i]).getDay()];

      let trHTML = `
      <li class="swiper-slide">
      <a href="">
      <p class="date">${day}</p>
      <p class="day">(${korDay})</p>
      </a>
      </li>
      `;
      target.append(trHTML);
    }); //요일 리스트 가져오기

    console.log(dateList);
    // let date = filteredDay[0].dt_txt.substr(8, 2);
    console.log(date);
    let Temp = "";

    $.each(dateList, function (i) {
      Temp = list.filter(function (item) {
        return item.dt.substr(0, 10) == dateList[i];
      });
      console.log(Temp);
      let TempArr = [];
      let iconArr = [];
      Temp.map((item) => {
        TempArr.push(item.main.temp);
        if (item.dt_txt.substr(-8) == "12:00:00") {
          iconArr.push(item.weather[0].icon);
        }
      });
      console.log(TempArr);
      console.log(iconArr);

      let icon = `<i class="fa-solid ${weatherIcon[iconArr]}"></i>`;
      // console.log(weatherIcon[iconArr[i]]);
      let maxTemp = Math.max(...TempArr);
      let minTemp = Math.min(...TempArr);

      console.log(maxTemp);
      console.log(minTemp);

      trHTML = `
      <li class="d-flex gap-3">
      ${icon}
        <span class="temp">
          <p><span>MAX </span>${maxTemp.toFixed(1)}<span>˚C</span></p>
          <p><span>MIN </span>${minTemp.toFixed(1)}<span>˚C</span></p>
        <span>
      </li>
      `;
      $(".widget_box .preview ul").append(trHTML);
    });

    $(".widget_box .preview ul li").eq(0).find("> *").show();
    $(".widget_box .swiper-slide a").click(function (e) {
      e.preventDefault();
      $(".widget_box .preview ul li > *").hide();
      let idx = $(this).parent().index();
      $(".widget_box .preview ul li").eq(idx).find("> *").show();
    });

    //preview - icon
    let previewIcon = $(".preview ul >li:first-child .fa-solid").clone();
    console.log(previewIcon);
    let previewIconBox = $(".today_icon");
    let previewIconHTML = `<i class="fa-solid ${weatherIcon[previewIcon]}"></i>`;
    previewIconBox.append(previewIcon);
    $(".menu .button").prepend(previewIconHTML);

    //preview - temp
    let todayTemp = $(".preview ul >li:first-child .temp").html();
    let previewTemp = `<div class="d-flex justify-content-center">${todayTemp}</div>`;
    let previewTempBox = $(".today_temp");

    previewTempBox.html(previewTemp);
    console.log(previewTemp);

    //preview - date
    let previewDateBox = $(".today_date");
    let previewDateHTML = `<div class="d-flex justify-content-center "><p>0${newDate.getDate()}</p><p>(${
      korWeek[day]
    })</p></div>`;
    previewDateBox.html(previewDateHTML);
  }
);

// $(".box").hover(function () {
//   $(this)
//     .find(".preview_widget")
//     .animate(function () {
//       transform: "translateX(-50px)";
//     });
//   $(this).prev().addClass("active");
// });
// $(".weather_cast").mouseout(function () {
//   $(this).removeClass("active");
//   $(this).next().removeClass("active");
// });

$(".widget_box").hover(
  function () {
    $(this)
      .find(".preview_widget")
      .stop()
      .animate({ left: "-90px" }, 500, "easeInBack", function () {
        $(this).prev().stop().animate({ left: "0" });
      });
  },
  function () {
    $(this)
      .find(".weather_cast")
      .stop()
      .animate({ left: "-253px" }, 400, "linear", function () {
        $(this).next().stop().animate({ left: "-40px" });
      });
  }
);

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
  '<img src="img/동코스1.svg" alt="" />'
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

  $(this).find("#tabs .img_container").html(holeImgList);
  $("#course .swiper-wrapper").html(holeList);
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

  let menus = menu.find(".main_menus");
  menus.find("li:nth-child(3)").html(`<a href="">오시는길</a>`);
  menus.find("li:nth-child(4)").hide();
  let previewIconClone = $(".weather_cast .preview ul li").text();
  menuBtn.prepend(previewIconHTML);
  console.log(previewIconClone);
  $(".menu .button").addClass("d-flex justify-content-between");
}
