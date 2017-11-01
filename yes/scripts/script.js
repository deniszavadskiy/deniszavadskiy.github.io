$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		var id  = $(this).attr('href');
		if (id[0]=="#") {
			event.preventDefault();
			var top = $(id).offset().top,
				height = $("#sectionHeader").height();
			$('body,html').animate({scrollTop: top + height - 70}, 1000);
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


$(document).on("scroll", onScroll);


function onScroll(){
	var menu_selector = "#menu";
	var scroll_top = $(document).scrollTop();
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href"),
			height = $("#sectionHeader").height();;
		if (hash[0] == "#") {
			var target = $(hash);
			console.log(target.outerHeight());
			if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top ) {
				$(menu_selector + " a.active").removeClass("active");
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		}
	});

}