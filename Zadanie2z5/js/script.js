(function($){

	$(document).ready(function(){

		// - wszystkie elementy <div>, posiadające zarówno klasę “grid” oraz klasę “grid-12”.
		var divGrid = $("div.grid, div.grid-12");

		// - wszystkie elementy <a>, których atrybut “href" zaczyna się na “http”, znajdujące się w
		// elemencie o klasie “nav”
		var links = $("nav a[href^='http']");

		// 		- wszystkie elementy <input>, których typ to “radio” lub “checkbox” oraz dodatkowo nie
		// są aktualnie zaznaczone (checked).
		var input = $(":radio, :checkbox").not(":checked");

		// 		- wyłącznie pierwszy element <p>, który jest pusty (nie zawiera dzieci) oraz znajduje się w
		// elemencie <div> z identyfikatorem “text”
		var firstLi = $("div.text p:empty").first();

		// - wszystkie elementy z klasą “pagination-item”, które nie są elementem <span>
		var pagItem1 = $(".pagination-item");
		var pagItem2 = $("[class=pagination-item]");

		console.log(divGrid);
		console.log(links);
		console.log(input);
		console.log(firstLi);
		console.log(pagItem1);
		console.log(pagItem2);
	});

})(jQuery);
