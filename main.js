// Application namespace
'use strict';

var RCApp = {

  new_artist_button: document.getElementById('add-artist'),
  new_album_button: document.getElementById('add-album'),
  new_label_button: document.getElementById('add-label'),

  albums: document.getElementById('albums'),
  artists: document.getElementById('artists'),
  labels: document.getElementById('labels'),

};

RCApp.setButtonEvents = function() {
  RCApp.new_artist_button.addEventListener('click', RCApp.new_artist_button_response);
  RCApp.new_album_button.addEventListener('click', RCApp.new_album_button_response);
  RCApp.new_label_button.addEventListener('click', RCApp.new_label_button_response);
};

RCApp.MusicThing = function() {
};

RCApp.MusicThing.prototype.render_item = function() {
  var html = '';
  html = this.generateHTML();
  document.getElementById(this + 's').innerHTML += html;
};

// RCApp.MusicThing.prototype.generateHTML = function(name) {
// 	this.name = name;
//   return '<li>' + this.name + '</li>';
// };

RCApp.Album = new RCApp.MusicThing();
RCApp.Album = function(name, description, genre) {
  this.name = name;
  this.description = description;
  this.genre = genre;
  this.artists = [];
};

RCApp.Album.prototype.generateHTML = function() {
  this.name = name;
  return '<li>' + this.name + '</li>';
};

RCApp.new_album_button_response = function() {
	var name = prompt('Album Name');
	var description = prompt('Album Description');
	var genre = prompt('Album Genre');
	var new_album = new RCApp.Album(name, description, genre);
	new_album.render_item();
};

RCApp.Artist = new RCApp.MusicThing();
RCApp.Artist = function(name, description) {
  this.name = name;
  this.description = description;
  this.albums = [];
};

RCApp.Artist.prototype.generateHTML = function() {
  this.name = name;
  return '<li>' + this.name + '</li>';
};

RCApp.new_artist_button_response = function() {
	var name = prompt('Artist Name');
	var description = prompt('Artist Description');
	var new_artist = new RCApp.Artist(name, description);
	new_artist.render_item();
};

RCApp.Label = new RCApp.MusicThing();
RCApp.Label = function(name) {
	this.name = name;
  this.artists = [];
};

RCApp.Label.prototype.generateHTML = function() {
  this.name = name;
  return '<li>' + this.name + '</li>';
};

RCApp.new_label_button_response = function() {
	var name = prompt('Record Label Name');
	var new_label = new RCApp.Label(name);
	new_label.render_item();
};

RCApp.setButtonEvents();