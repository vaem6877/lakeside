// 시설안내

let facWrap = $(".facility-wrapper"),
  navBtn = facWrap.find(".facility-nav-wrapper ul li"),
  navImg = facWrap.find(".fac-nav-img-wrapper img"),
  facInfo = facWrap.find(".facility-information .facility-info-wrapper"),
  pager = facWrap.find(".facility-nav-wrapper .fac-pager a");

navBtn.click(function (e) {
  e.preventDefault();
  let tabIdx = $(this).index();
  // navImg.removeClass("active");
  // facInfo.removeClass("active");
  // pager.removeClass("active");

  // navImg.eq(tabIdx).addClass("active");
  // facInfo.eq(tabIdx).addClass("active");
  // pager.eq(tabIdx).addClass("active");

  navImg.hide();
  facInfo.hide();
  pager.hide();

  navImg.eq(tabIdx).fadeIn();
  facInfo.eq(tabIdx).fadeIn();
  pager.eq(tabIdx).fadeIn();
}); //nav a 클릭시 할일
