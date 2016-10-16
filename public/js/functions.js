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

	$('div.rate-widget ul').children('li').hover(function() {
		$(this).prevAll().addBack().children('i').removeClass('fa-star-o').addClass('fa-star');
	}, function() {
		$(this).prevAll().addBack().children('i').removeClass('fa-star').addClass('fa-star-o');
	});

	$('div.rate-widget ul').children('li').on('click', function(e) {
		var self = $(this);
		e.preventDefault();

		var rating = $(this).index();
		var movieStr = window.location.href;
		var movieId = movieStr.slice(movieStr.lastIndexOf('/') + 1);

		var data = {
			ratings: ++rating,
			movieId: movieId
		};

		$.ajax({
			type: 'POST',
			data: data,
			dataType: 'json',
			url: '/rating',
			success: function(data) {
				console.log(data);
				self.prevAll().addBack().children('i').removeClass('fa-star-o').addClass('fa-star');
			}
		});

	});

})();