(function() {

	function itHas(str) {
		if(window.location.href.indexOf(str) > -1) return true;
	}

	$('.typeahead').typeahead({
		name: 'searchBox',
		source: function(query, process) {
			$.getJSON('/search', {searchBox: query}, function(data) {

				movies = [];
				map = {};
				$.each(data, function(i, movie) {
					map[movie.title] = movie;
					movies.push(movie.title);
				});
				return process(movies);
			});
		},
		updater: function(item) {
			var selectedId = map[item]._id;
			(itHas('movie')) ? window.location.href = selectedId : window.location.href = 'movie/' + selectedId;
			return item;
		}
	});

})();