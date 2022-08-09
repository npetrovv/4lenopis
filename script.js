$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	autoplay: true,
  	autoplayTimeout: 2000,
  	loop: true,
  	responsive: {
  		0: {
  			items: 1
  		},
  		600: {
  			items: 3
  		},
  		1000: {
  			items: 3
  		}
  	}
  });

});

var owl = $('.owl-carousel');
owl.owlCarousel();
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})