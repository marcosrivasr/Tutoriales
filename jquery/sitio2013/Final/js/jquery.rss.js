$(function(){
	jQuery.fn.blogRSS = function(url){
		this.each(function(){
			var $element  = $(this);
			var imagen    = "";
			var titulo    = "";
			var contenido = "";
			var link      = "";
			$.getJSON(url,function(data){
				$.each(data.feed.entry, function(i, entry){
					link = "<a href='" + entry.link[2].href + "' target='_blank'>";
					titulo = "<h3>" + entry.title.$t + "</h3>";
					imagen = "<img src='" + entry.media$thumbnail.url + "' />";
					contenido += link + "<div class='rss-container'>";
					contenido += titulo + imagen + "</div></a>";
				});
				$element.html(contenido);
			});
		});
	}
});
