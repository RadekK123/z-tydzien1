(function($) {

	$(document).ajaxStart(function(data, status,jqXHR){
		var ul = $("ul.dane");

		if( !(ul.lenght) ){
			ul = $("<ul></ul>", {
				"class": "dane"
			}).appendTo("div.output");
		}
	});

	$(document).ready(function(){

		var button = $("#button");
		var output = $(".output");
		button.on("click", function(){

			$.ajax({

				url: "https://jsonplaceholder.typicode.com/users",
				method: "get",
				dataType: "jsonp",
				jsonp: "callback",
				success: function(data, status, jqXHR){
					var dane = data;

					dane.map(function(elem, i){
						var name = elem.name;
						var email = elem.email;
						var phone = elem.phone;
						var li = $("<li></li>",{
							"text": name + " " + email + " " + phone
						});
						li.appendTo("ul.dane");
					});

				},

			});

		});

	});

})(jQuery);

