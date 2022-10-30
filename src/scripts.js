$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		initialSlide: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
					{
							breakpoint: 800,
							settings: {
								slidesToShow: 1,
								centerMode:false,
							}
					},
			]
	});
	$('.events__slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
			{
				breakpoint: 400,
				settings: {
					centerMode: false,
				}
			}
		]
	});
	$('.nav__btn').on('click', function(){
		$('.header__nav-list').toggleClass('nav__menu--hidden');
	});
});