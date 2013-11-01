'use strict';

var RCApp = {
	Album: function(name, description, genre) {
    this.name = name;
    this.description = description;
    this.genre = genre;
    this.artists = [];
	},

	new_album_button_response: function() {
		var name = prompt('Album Name');
		var description = prompt('Album Description');
		var genre = prompt('Album Genre');
		new_album = new Album(name, description, genre);
	},
};