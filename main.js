// Application namespace
'use strict';

var RCApp = {

  new_artist_button: document.getElementById('add-artist'),
  new_album_button: document.getElementById('add-album'),
  new_label_button: document.getElementById('add-label'),

  new_artist_form: document.getElementById('new-artist-form'),
  new_album_form: document.getElementById('new-album-form'),
  new_label_form: document.getElementById('new-label-form'),

  albums: document.getElementById('albums'),
  artists: document.getElementById('artists'),
  labels: document.getElementById('labels'),

};

RCApp.setButtonEvents = function() {
  RCApp.new_artist_button.addEventListener('click', RCApp.new_artist_button_response);
  RCApp.new_album_button.addEventListener('click', RCApp.new_album_button_response);
  RCApp.new_label_button.addEventListener('click', RCApp.new_label_button_response);
};

RCApp.showForm = function(form) {
  form.className = 'hide';
};

RCApp.hideForm = function(form) {
	form.className = 'show';
}

RCApp.Album = function(name, description, genre) {
  this.name = name;
  this.description = description;
  this.genre = genre;
  // this.artists = [];
};

RCApp.Album.prototype.generateHTML = function() {
  var html = '<li>' + this.name + '</li>';
  document.getElementById('albums').innerHTML += html;
};

RCApp.new_album_button_response = function() {
	var name = prompt('Album Name');
	var description = prompt('Album Description');
	var genre = prompt('Album Genre');
	var new_album = new RCApp.Album(name, description, genre);
	new_album.generateHTML();
};

RCApp.Artist = function(name, description) {
  this.name = name;
  this.description = description;
  // this.albums = [];
};

RCApp.Artist.prototype.generateHTML = function() {
  var html = '<li>' + this.name + '</li>';
  document.getElementById('artists').innerHTML += html;
};

RCApp.new_artist_button_response = function() {
	var name = prompt('Artist Name');
	var description = prompt('Artist Description');
	var new_artist = new RCApp.Artist(name, description);
	new_artist.generateHTML();
};

RCApp.Label = function(name) {
	this.name = name;
  // this.artists = [];
};

RCApp.Label.prototype.generateHTML = function() {
  var html = '<li>' + this.name + '</li>';
  document.getElementById('labels').innerHTML += html;
};

RCApp.new_label_button_response = function() {
	var name = prompt('Record Label Name');
	var new_label = new RCApp.Label(name);
	new_label.generateHTML();
};

RCApp.setButtonEvents();