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
      let trHTML = `
      <li class="swiper-slide">
      <a href="">
      <p class="date">${day}</p>
      <p class="day">요일</p>
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
      let codeArr = [];
      let codeDescArr = [];
      Temp.map((item) => {
        TempArr.push(item.main.temp);
        codeArr.push(item.weather[0].icon);
        codeDescArr.push(item.weather[0].main);
      });
      console.log(TempArr);
      console.log(codeArr);

      let iconImg = `<img src="http://openweathermap.org/img/wn/${codeArr[i]}.png" alt="${codeDescArr[i]}">`;

      let maxTemp = Math.max(...TempArr);
      let minTemp = Math.min(...TempArr);

      console.log(maxTemp);
      console.log(minTemp);
      // console.log(todayTemp); //오늘 날짜 최고온도추출
      // let maxTemp = Math.max(...todayTemp);
      // let minTemp = Math.min(...todayTemp);
      // console.log(maxTemp); //오늘 날짜 최고온도추출
      // console.log(minTemp); //오늘 날짜 최고온도추출
      // console.log(todayMaxTemp.sort().reverse());
      trHTML = `
      <li class="d-flex">
      ${iconImg}
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
      console.log(idx);
      $(".preview ul li").eq(idx).find("> *").show();
    });
  }
);
