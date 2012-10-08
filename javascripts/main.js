function quote(json) {
	if (json.body != null) {
		document.getElementById('body').innerHTML = json.body;
		document.getElementById('author').innerHTML = json.author;
		document.getElementById('date').innerHTML = json.date;
	} else {
		document.getElementById('quote-container').innerHTML = '';
	}
}
