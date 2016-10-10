(function() {

	var movieNames = new Bloodhound({
		  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  queryTokenizer: Bloodhound.tokenizers.whitespace,
		  remote: {
		    url: '/search?searchBox=%QUERY',
		    wildcard: '%QUERY'
		  }
	});

	$('.typeahead').typeahead(null, {
		name: 'searchBox',
		source: movieNames,
		limit: 10
	});

})();