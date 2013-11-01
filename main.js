// Application namespace
'use strict';

var RCApp = {

  new_artist_button: document.getElementById('add-artist'),
  new_album_button: document.getElementById('add-album'),
  new_label_button: document.getElementById('add-label'),

  albums: document.getElementById('albums'),
  artists: document.getElementById('artists'),
  labels: document.getElementById('labels'),
  
  setButtonEvents: function() {
    RCApp.new_artist_button.addEventListener('click', RCApp.new_artist_button_response);
    RCApp.new_album_button.addEventListener('click', RCApp.new_album_button_response);
    RCApp.new_label_button.addEventListener('click', RCApp.new_label_button_response);
  },

};

RCApp.setButtonEvents();

RCApp.MusicThing = function() {
};

RCApp.MusicThing.prototype.generateHTML = function() {
      return '<li>' + this.name + '</li>';
};

RCApp.Album = new RCApp.MusicThing();
RCApp.Album = function(name, description, genre) {
  this.name = name;
  this.description = description;
  this.genre = genre;
  this.artists = [];
  this.prototype = RCApp.MusicThing.prototype;
};

RCApp.new_album_button_response = function() {
	var name = prompt('Album Name');
	var description = prompt('Album Description');
	var genre = prompt('Album Genre');
	var new_album = new RCApp.Album(name, description, genre);
	RCApp.albums.innerHTML += new_album.generateHTML;
};

RCApp.Artist = new RCApp.MusicThing();
RCApp.Artist = function(name, description) {
  this.name = name;
  this.description = description;
  this.albums = [];
};

RCApp.new_artist_button_response = function() {
	var name = prompt('Artist Name');
	var description = prompt('Artist Description');
	var new_artist = new RCApp.Artist(name, description);
  RCApp.artists.innerHTML += new_artist.generateHTML();
};

RCApp.Label = new RCApp.MusicThing();
RCApp.Label = function(name) {
	this.name = name;
  this.artists = [];
};

RCApp.new_label_button_response = function() {
	var name = prompt('Record Label Name');
	var new_label = new RCApp.Label(name);
  RCApp.labels.innerHTML += new_label.generateHTML();
};

