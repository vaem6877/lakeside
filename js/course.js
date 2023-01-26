document.querySelector("li").removeAttribute("style");

$(function () {
  $(".hole_desc #tabs").tabs({
    active: 0,
  });
}); //코스 탭
$(function () {
  $(".swiper #tabs").tabs({
    active: 0,
  });
}); //홀 탭

// for (let i = 1; i < 19; i++) {
//   let list = `<li class="swiper-slide"><a href="#tabs-${i}">${i} HOLE</a></li>`;
//   console.log(list);
// }
// $(".swiper-wrapper").html(list);

var swiper = new Swiper(".swiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); //홀 스와이퍼

let mix = mixitup(".mix-wrapper", {
  animation: {
    duration: 391,
    nudge: false,
    reverseOut: false,
    effects: "scale(0.01)",
  },
}); //코스갤러리 필터
