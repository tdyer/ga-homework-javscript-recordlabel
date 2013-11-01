// Application namespace
'use strict';

var RCApp = {

  add_artist_button: document.getElementById('add-artist'),
  add_album_button: document.getElementById('add-album'),
  add_label_button: document.getElementById('add-label'),
  new_label_button: document.getElementById('new-label-button'),
  new_artist_button: document.getElementById('new-artist-button'),
  new_album_button: document.getElementById('new-album-button'),

  new_artist_form: document.getElementById('new-artist-form'),
  new_album_form: document.getElementById('new-album-form'),
  new_label_form: document.getElementById('new-label-form'),

  albums: document.getElementById('albums'),
  artists: document.getElementById('artists'),
  labels: document.getElementById('labels'),

};

RCApp.setButtonEvents = function() {
  RCApp.add_artist_button.addEventListener('click', RCApp.add_artist_button_response);
  RCApp.add_album_button.addEventListener('click', RCApp.add_album_button_response);
  RCApp.add_label_button.addEventListener('click', RCApp.add_label_button_response);

  RCApp.new_album_button.addEventListener('click', function(event) {
    event.preventDefault();
    RCApp.create_new_album();
  });

  RCApp.new_artist_button.addEventListener('click', function(event) {
    event.preventDefault();
    RCApp.create_new_artist();
  });

  RCApp.new_label_button.addEventListener('click', function(event) {
    event.preventDefault();
    RCApp.create_new_label();
  });

};


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

RCApp.add_album_button_response = function() {
	RCApp.add_album_button.className = 'hide';
	RCApp.new_album_form.className = 'show';
};

RCApp.create_new_album = function() {
	var name = document.getElementById('album-name-input').value;
	var description = document.getElementById('album-description-input').value;
	var genre = document.getElementById('album-genre-input').value;
	var new_album = new RCApp.Album(name, description, genre);
	new_album.generateHTML();
	RCApp.new_album_form.className = 'hide';
	RCApp.add_album_button.className = 'show';
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

RCApp.add_artist_button_response = function() {
	RCApp.add_artist_button.className = 'hide';
	RCApp.new_artist_form.className = 'show';
};

RCApp.create_new_artist = function() {
	var name = document.getElementById('artist-name-input').value;
	var description = document.getElementById('artist-description-input').value;
	var new_artist = new RCApp.Artist(name, description);
	new_artist.generateHTML();
	RCApp.add_artist_button.className = 'show';
	RCApp.new_artist_form.className = 'hide';
};

RCApp.Label = function(name) {
	this.name = name;
  // this.artists = [];
};

RCApp.Label.prototype.generateHTML = function() {
  var html = '<li>' + this.name + '</li>';
  document.getElementById('labels').innerHTML += html;
};

RCApp.add_label_button_response = function() {
	RCApp.add_label_button.className = 'hide';
	RCApp.new_label_form.className = 'show';
};

RCApp.create_new_label = function() {
	var name = document.getElementById('label-name-input').value;
	var new_label = new RCApp.Label(name);
	new_label.generateHTML();
	RCApp.add_label_button.className = 'show';
	RCApp.new_label_form.className = 'hide';
};


RCApp.setButtonEvents();