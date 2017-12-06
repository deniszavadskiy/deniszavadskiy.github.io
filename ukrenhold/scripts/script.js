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

	$("#home").on("click", "a", function (event) {
		var id  = $(this).attr('href');
		if (id[0]=="#") {
			event.preventDefault();
			var top = $(id).offset().top,
				height = $("#sectionHeader").height();
			$('body,html').animate({scrollTop: top + height - 70}, 1000);
		}
	});

	$("#headerLogo").on("click", function (event) {
		event.preventDefault();
		console.log("click logo");
		$('body,html').animate({scrollTop: 0}, 1000);
	});

	$("#goUp").on("click", function (event) {
		event.preventDefault();
		console.log("click logo");
		$('body,html').animate({scrollTop: 0}, 1000);
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

	$("#loading").delay(750).fadeOut(1000);

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
	var headerHeight = $("header").height();
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		if (hash[0] == "#") {
			var target = $(hash);
			if (target.position().top - headerHeight <= scroll_top && target.position().top + target.outerHeight() > scroll_top ) {
				$(menu_selector + " a.active").removeClass("active");
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		}
	});
}


//post require form mail
$('#requireForm').submit(function(event){
	event.preventDefault();
	var form_data = $(this).serialize();
	$.ajax({
		type: "POST",
		url: "/post-feedback-form.php",
		data: form_data,
		success: function(response) {
			setTimeout(function(){
				// $("#popup-success").toggleClass("active", true);
				// $("#popup-overlay").toggleClass("active", true);
			},1500);
			$('#requireForm')[0].reset();
		}
	});
});


$(window).scroll(function () {
	if ($(this).scrollTop() > 0) {
		$("#header").toggleClass("highlight", true);
	} else {
		$("#header").toggleClass("highlight", false);
	}

	if($(this).scrollTop() > $(document).height()*0.3) {
		$("#goUp").toggleClass("active", true);
	} else {
		$("#goUp").toggleClass("active", false);
	}
});