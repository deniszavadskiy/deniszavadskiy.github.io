$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		var id  = $(this).attr('href');
		if (id[0]=="#") {
			event.preventDefault();
			var top = $(id).offset().top,
				height = $("#sectionHeader").height();
			$('body,html').animate({scrollTop: top - height}, 1000);
		}
	});

	$("#footMenu").on("click","a", function (event) {
		var id  = $(this).attr('href');
		if (id[0]=="#") {
			event.preventDefault();
			var top = $(id).offset().top,
				height = $("#sectionHeader").height();
			$('body,html').animate({scrollTop: top - height}, 1000);
		}
	});

	$("#mobileMenu").on("click","a", function (event) {
		var id  = $(this).attr('href');
		if (id[0]=="#") {
			event.preventDefault();
			var top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 50}, 1000);
		}
		toggleMobileHeader();
	});

	$('#menuButton').click(toggleMobileHeader);

	function toggleMobileHeader() {
		$('#menuButton').toggleClass('active');
		$('#mobileMenuWrapper').toggleClass('active');
	}
});