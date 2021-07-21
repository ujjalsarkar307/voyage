
$('.banner_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<i class="fas fa-angle-left left"></i>',
    nextArrow:'<i class="fas fa-angle-right right"></i>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false,
          infinite: true,
          speed: 300,
          arrows:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:'<i class="fas fa-angle-left left"></i>',
          nextArrow:'<i class="fas fa-angle-right right"></i>',
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          dots: true,
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



$('.offers_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false,
          infinite: true,
          speed: 300,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow:'<i class="fas fa-angle-left prev"></i>',
          nextArrow:'<i class="fas fa-angle-right next"></i>',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:'<i class="fas fa-angle-left prev"></i>',
          nextArrow:'<i class="fas fa-angle-right next"></i>',
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
    

  $('.review_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false,
          infinite: true,
          speed: 300,
          arrows:false,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
    