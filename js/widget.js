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
    $.each(filteredDay, function (i) {
      let date = filteredDay[i].dt_txt.substr(0, 8); // 각 날짜(년-월-일)

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

    let maxTempArr = [];
    let date = filteredDay[0].dt_txt.substr(8, 2);
    // console.log(date);
    $.each(list, function (i) {
      var maxTemp = list.filter(function (item) {
        return item.dt_txt.substr(0, 10) == today;
      });
      console.log(maxTemp);
      let todayMaxTemp = maxTemp[i].main.temp_max;
      maxTempArr.push(todayMaxTemp);
      console.log(maxTempArr); //오늘 날짜 최고온도추출
      console.log(Math.max(maxTempArr[i]));
    });
  }
);
