// Application namespace
'use strict';

var RCApp = {

  new_artist_button: document.getElementById('add-artist'),
  new_album_button: document.getElementById('add-album'),
  new_label_button: document.getElementById('add-label'),

  albums: [],
  artists: [],
  labels: [],


  setButtonEvents: function() {
    RCApp.new_artist_button.addEventListener('click', RCApp.new_artist_button_response);
    RCApp.new_album_button.addEventListener('click', RCApp.new_album_button_response);
    RCApp.new_label_button.addEventListener('click', RCApp.new_label_button_response);
  },

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
		RCApp.albums.push(new RCApp.Album(name, description, genre));
	},

	Label: function(name) {
		this.name = name;
    this.artists = [];
	},

	new_label_button_response: function() {
		var name = prompt('Record Label Name');
	  RCApp.labels.push(new RCApp.Label(name));
	},

	Artist: function(name, description) {
    this.name = name;
    this.description = description;
    this.albums = [];
  },

  RCApp.Artist.prototype.generateHTML: function() {

  }

  new_artist_button_response: function() {
		var name = prompt('Artist Name');
		var description = prompt('Artist Description');
		RCApp.artists.push(new RCApp.Artist(name, description));
	},
};




RCApp.setButtonEvents();