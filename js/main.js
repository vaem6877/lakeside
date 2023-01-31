$(".main-slide").slick({
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
});

$(".controls .next").on("click", () => {
  $(".main-slide").slick("slickNext");
});

$(".controls .prev").on("click", () => {
  $(".main-slide").slick("slickPrev");
});
