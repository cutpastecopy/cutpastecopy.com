(function ($) {
	"use strict";

	function wiggle() {
		var randNum = Math.floor(Math.random() * $('.project-item-wrap').length) + 1;
		$('.project-item-wrap').eq(randNum).addClass('is-emph')
			.siblings().removeClass('is-emph');
	}

	$(document).ready(function () {
		setInterval(function() {
				wiggle()
			}, 4000);

		$('.toggle').bind('click', function() {
			$('body').toggleClass('nav-open');
			return false;
		});
	});
})(jQuery);
