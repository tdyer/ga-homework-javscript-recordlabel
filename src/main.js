var RCApp = {

	Label: function (name) {
		this.name = name;
		this.artists = [];
	},

	Artist: function(name, description) {
		this.name = name;
		this.description = description;
		this.albums = [];
	},

	addArtist: function() {
		var name = document.getElementById('artist-name').value,
		description = document.getElementById('artist-desc').value;
		new RCApp.Artist(name, description);
	},

	// promptArtistInfo: function() {
	// 	var name = prompt("Artist name?"),
	// 	description = prompt("Artist description?");
	// 	dfa.artists.push(new RCApp.Artist(name, description));
	// },

	Album: function(name, description, genre) {
		this.name = name;
		this.description = description;
		this.genre = genre;
	}

};

dfa = new RCApp.Label("DFA Records");
RCApp.promptArtistInfo();
// RCApp.promptArtistInfo();

// Modify the display property of the HTML elements. Alternately, there may be a hidden property. 

