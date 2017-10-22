(function($){

	$(document).ready(function(){

		var toggle = $("a.menu-toggler");

		var li = $("li.nav-item");
		li.hide();

		toggle.on("click", function(){

			li.slideToggle(500, function(){
				$(this).parent().css("background-color", "gray");
			});

		});

	});

})(jQuery);