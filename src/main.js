var RCApp = {

	submitArtistButton: document.getElementById('artist-submit'),

	setSubmitArtistEvent: function() {
		RCApp.submitArtistButton.addEventListener('click', function(event) {
			event.preventDefault();
			RCApp.submitArtistClick();
		});
	},


	submitArtistClick: function() {
		RCApp.addArtist();
	},

	addArtist: function() {
		var name = document.getElementById('artist-name').value,
		description = document.getElementById('artist-desc').value;
		dfa.artists.push(new RCApp.Artist(name, description));
	},

	
	Label: function (name) {
		this.name = name;
		this.artists = [];
	},

	Artist: function(name, description) {
		this.name = name;
		this.description = description;
		this.albums = [];
	},

	Album: function(name, description, genre) {
		this.name = name;
		this.description = description;
		this.genre = genre;
	}

};

dfa = new RCApp.Label("DFA Records");
RCApp.setSubmitArtistEvent();

// Modify the display property of the HTML elements. Alternately, there may be a hidden property. 

