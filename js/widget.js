var swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  spaceBetween: 3,
  setWrapperSize: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let target = $(".swiper-wrapper");
//홀 스와이퍼

let newDate = new Date();
let year = newDate.getFullYear(); // 년도
let month = newDate.getMonth() + 1; // 월
let date = newDate.getDate(); // 날짜
let day = newDate.getDay(); // 요일
let today = `${year}-0${month}-${date}`;
console.log(today);

$.getJSON(
  "http://api.openweathermap.org/data/2.5/forecast?lat=37.5683&lon=126.9778&appid=6683b822924895deb0d2f90cf228a02e&units=metric",
  function (result) {
    console.log(result);
    //console.log(result.list[0].dt);
    let list = result.list;
    console.log(list);

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
      let korWeek = new Array("월", "화", "수", "목", "금", "토", "일");
      let korDay = korWeek[new Date(dateList[i]).getDay() - 1];

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
    let Temp = "";

    $.each(dateList, function (i) {
      Temp = list.filter(function (item) {
        return item.dt_txt.substr(0, 10) == dateList[i];
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

      let weatherIcon = {
        "01d": "fa-sun",
        "01n": "fa-moon",
        "02d": "fa-cloud-sun",
        "02n": "fa-cloud-moon",
        "03d": "fa-cloud",
        "03n": "fa-cloud",
        "04d": "fa-clouds",
        "04n": "fa-clouds",
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
          <p>MAX ${maxTemp}</p>
          <p>MIN ${minTemp}</p>
        <span>
      </li>
      `;
      $(".preview ul").append(trHTML);
    });

    $(".preview ul li").eq(0).find("> *").show();
    $(".swiper-slide a").click(function (e) {
      e.preventDefault();
      $(".preview ul li > *").hide();
      let idx = $(this).parent().index();
      $(".preview ul li").eq(idx).find("> *").show();
    });
  }
);

$(".weather_cast").hover(
  function () {
    $(this).addClass("active");
  },
  function () {
    $(this).removeClass("active");
  }
);
