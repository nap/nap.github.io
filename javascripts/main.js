function quote(data) {
	if (data.body != null) {
		$('#quote-container').toggle();
		$('#body').html(data.body);
		$('#author').html(data.author);
		$('#date').html(data.date);
	}
}