$(document).ready(function(){

	$(window).scroll(function() {

		//change navbar color to black on scroll
		if($(window).scrollTop() != 0) {
			$('#navbar-main').removeClass('navbar-transparent');
		}

		//change navbar color to transparent iscrolled to top of the page
		else if($(window).scrollTop() == 0) {
			$('#navbar-main').addClass('navbar-transparent');
		}
	});

	//scroll when the learn more anchor button is clicked
	$("a[href^='#']").on('click', function(e) {
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
	});

	//ensure all links do not remain depressed after pressing
	$("a").click(function() {
		$(this).blur();
	});

}); 