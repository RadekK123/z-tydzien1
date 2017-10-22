(function($){

	$(document).ready(function(){

		var input = $("input#createLi");
		var output = $("div.output");
		var button = $("button");


		button.on("click", function(e){

			e.preventDefault();
			var valInput = $.trim(input.val());

			if( !(valInput === "") ){
				var ul = $("<ul></ul>");
				var li = $("<li></li>");

				li.text(valInput).appendTo(ul);
				ul.appendTo(output);
			}

			console.log(valInput);



		});

	});

})(jQuery);