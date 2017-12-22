
$(document).ready(function() {
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "../php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$("#form").trigger("reset");
		});
		return false;
	});
});


$('.js-close-thank-you').click(function() { 
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { 
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-thank-you').fadeOut();
	}
});

 $(document).ready(function(){
     $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-item'
       });
         });
      
 
    $('.navbar-toggler').click(function(){
       $('.nav-collapse').slideToggle("show");
    });

      $('.sl-show').slick({
  cssEase: 'ease-in',
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  directionNav: false,
  asNavFor: '.sl-nav'
});
$('.sl-nav').slick({
  dots: false,
  slidesToShow: 7,
  asNavFor: '.sl-show',
  focusOnSelect: true,
});
   