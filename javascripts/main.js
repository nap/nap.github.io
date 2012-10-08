//function quote(json) {
//	if (json.body != null) {
//		document.getElementById('body').innerHTML = json.body;
//		document.getElementById('author').innerHTML = json.author;
//		document.getElementById('date').innerHTML = json.date;
//	} else {
//		document.getElementById('quote-container').innerHTML = '';
//	}
//}

$(document).ready(function() {
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
		function(data) {
			if (data.body != null) {
	  			$('#body').innerHTML = data.body;
	  			$('#author').innerHTML = data.author;
	  			$('#date').innerHTML = data.date;
			} else {
	  			$('#quote-container').innerHTML = '';
			}
		}
	);
}