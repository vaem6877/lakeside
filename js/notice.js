// 시설안내

let facWrap = $(".facility-wrapper"),
  navBtn = facWrap.find(".facility-nav-wrapper ul li"),
  navImg = facWrap.find(".fac-nav-img-wrapper img"),
  facInfo = facWrap.find(".facility-information .facility-info-wrapper"),
  pager = facWrap.find(".facility-nav-wrapper .fac-pager a");

navBtn.click(function (e) {
  e.preventDefault();
  let tabIdx = $(this).index();

  showSlide(tabIdx);
  // navImg.hide();
  // facInfo.hide();
  // pager.hide();

  // navImg.eq(tabIdx).fadeIn();
  // facInfo.eq(tabIdx).fadeIn();
  // pager.eq(tabIdx).fadeIn();
}); //nav a 클릭시 할일

function showSlide(idx) {
  navBtn.add(navImg).add(facInfo).add(pager).removeClass("active");

  navBtn
    .eq(idx)
    .add(navImg.eq(idx))
    .add(facInfo.eq(idx))
    .add(pager.eq(idx))
    .addClass("active");
}
