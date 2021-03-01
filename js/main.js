$( document ).ready(function() {
  console.log("READY!!!");

  $(function(){
    var nav = $('.nav'),
        menuToggle = $('.menu-toggle'),
        menuBlock = $('.menu'),
        menuLink = $('.menu__link');

    menuToggle.click(function(event){
			event.preventDefault();
      nav.toggleClass('nav__opened');
			menuBlock.toggleClass('menu__opened');
		});
    menuLink.on('click', function(){
      if(nav.hasClass('nav__opened') && menuBlock.hasClass('menu__opened'))
      {
        nav.removeClass('nav__opened');
        menuBlock.removeClass('menu__opened');
      }
    });
  });


  $(function(){
    var openBlock = $('.openblock-item__more'),
        btnOpen = $('.openblock__readmore');


    btnOpen.click(function(event){
      event.preventDefault();
      $(this).parent().toggleClass('block-opened');
    });
  });



  $(function(){
    var readBlock = $('.skills-card__more'),
        btnToggle = $('.skills-card__readmore');

    btnToggle.click(function(event){
      event.preventDefault();
      $(this).parent().toggleClass('skills-card__moreOpened');
    });
  });

  $('.technology-slider__skills').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    dots: false,
    items: 3,
    smartSpeed: 500,
    navContainer: ('.technology-nav'),
    responsiveClass: true,
    responsive:{
      0:{
        items: 1
      },
      450:{
        items: 2
      },
      638:{
        items: 3
      }
    }
  });
});
