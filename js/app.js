$(document).ready(function () {
	$(".menu-icon").click(function () {
		$("#nav-item").removeClass("d-none").toggle();
		// $("#nav-item").toggle();
	});

	$(document).ready(function () {
		$(".counter").counterUp({
			delay: 10,
			time: 800
			
		});
	});

	// play video 

	$('#play-video').on('click', function(e){
		e.preventDefault();
		$('#video-overlay').addClass('open');
		$("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
	   });
	   
	   $('.video-overlay, .video-overlay-close').on('click', function(e){
		e.preventDefault();
		close_video();
	   });
	   
	   $(document).keyup(function(e){
		if(e.keyCode === 27) { close_video(); }
	   });
	   
	   function close_video() {
		$('.video-overlay.open').removeClass('open').find('iframe').remove();
	   };
});



