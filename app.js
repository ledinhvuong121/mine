$(document).ready(function(){
    $('.customer-list').slick({
        slidesToShow: 3,
        slideToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left arrow'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right arrow'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
        dots: true,
    });
  });
//   $(document).ready(function(){ 
//     $('.slider-list').slick({
//         slidesToShow: 3,
//         slideToScroll: ,
//         infinite: false,
//         draggable: false,
//         prevArrow:"<button type='button' class='slick-prev pull-left arrow'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i> Trang trước</button>",
//         nextArrow:"<button type='button' class='slick-next pull-right arrow'>Trang sau<i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
//         dots: true,
//     });
//   });
