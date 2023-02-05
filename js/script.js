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

//메뉴 시작 ======================================================

let menu = $(".menu"),
  menuBtn = menu.find(".button");

menuBtn.click(function () {
  menu.toggleClass("active");
  $(this).toggleClass("active");
});

//메뉴 끝 ======================================================

//위젯 시작 ======================================================

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
//홀 스와이퍼 라이브러리

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
let previewIcon = "";
let previewIconBox = "";
let previewIconHTML = "";

$.getJSON(
  "http://api.openweathermap.org/data/2.5/forecast?lat=37.5683&lon=126.9778&appid=d5787a1c2196a85e7ed4d4fbd60ce03e&units=metric",
  function (result) {
    console.log(result);
    let list = result.list;

    console.log(list);
    $.each(list, function (i) {
      let convertDate = new Date(list[i].dt * 1000);
      console.log(convertDate);
    });

    const filteredDay = list.reduce((acc, current) => {
      const x = acc.find(
        (item) => item.dt_txt.substr(0, 10) === current.dt_txt.substr(0, 10)
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
      date = filteredDay[i].dt_txt.substr(0, 10); // 각 날짜(년-월-일)

      dateList.push(date);

      let day = filteredDay[i].dt_txt.substr(8, 2); //각 날짜의 일
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
    // console.log(date);
    // let Temp = "";
    // let TempArr = [];
    // let iconArr = [];
    // let previewIcon = '';
    // let previewIconBox = '';
    // let previewIconHTML = '';

    $.each(dateList, function (i) {
      Temp = list.filter(function (item) {
        return item.dt_txt.substr(0, 10) == dateList[i];
      });
      console.log(Temp);
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
    previewIcon = iconArr[0];
    console.log(previewIcon);
    previewIconBox = $(".today_icon");
    previewIconHTML = `<i class="fa-solid ${weatherIcon[previewIcon]}"></i>`;
    previewIconBox.append(previewIconHTML);
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

// 위젯 끝 ======================================================
