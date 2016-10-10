(function() {

	$('.typeahead').typeahead({
		name: 'searchBox',
		source: function(query, process) {
			$.getJSON('/search', {searchBox: query}, function(data) {
				return process(data);
			});
		}
	});

})();