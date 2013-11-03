'use strict';

var RCApp = {

  show_artist_form_button: document.getElementById('add-artist'),
  show_album_form_button: document.getElementById('add-album'),
  show_label_form_button: document.getElementById('add-label'),

  label_submit_form_button: document.getElementById('new-label-button'),
  artist_submit_form_button: document.getElementById('new-artist-button'),
  album_submit_form_button: document.getElementById('new-album-button'),

  new_artist_form: document.getElementById('new-artist-form'),
  new_album_form: document.getElementById('new-album-form'),
  new_label_form: document.getElementById('new-label-form'),

  albums: document.getElementById('albums'),
  artists: document.getElementById('artists'),
  labels: document.getElementById('labels'),

  all_artists: []

};

RCApp.setButtonEvents = function() {
  RCApp.show_artist_form_button.addEventListener('click', RCApp.show_artist_form_button_response);
  RCApp.show_album_form_button.addEventListener('click', RCApp.show_album_form_button_response);
  RCApp.show_label_form_button.addEventListener('click', RCApp.show_label_form_button_response);

  RCApp.album_submit_form_button.addEventListener('click', function(event) {
    event.preventDefault();
    RCApp.create_new_album();
  });

  RCApp.artist_submit_form_button.addEventListener('click', function(event) {
    event.preventDefault();
    RCApp.create_new_artist();
  });

  RCApp.label_submit_form_button.addEventListener('click', function(event) {
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

RCApp.show_album_form_button_response = function() {
        RCApp.show_album_form_button.className = 'hide';
        RCApp.new_album_form.className = 'show';
};

RCApp.create_new_album = function() {
        var name = document.getElementById('album-name-input').value;
        var description = document.getElementById('album-description-input').value;
        var genre = document.getElementById('album-genre-input').value;
        var new_album = new RCApp.Album(name, description, genre);
        new_album.generateHTML();
        RCApp.new_album_form.className = 'hide';
        RCApp.show_album_form_button.className = 'show';
};

RCApp.Artist = function(name, description) {
  this.name = name;
  this.description = description;
  // this.albums = [];
};

RCApp.Artist.prototype.generateHTML = function() {
  var html = '<li id=\'' + this.name + '\' class=\'artist-link-item\'>' + this.name + '</li>';
  document.getElementById('artists').innerHTML += html;
  var artist_link = document.getElementById(this.name);
  artist_link.addEventListener('click', RCApp.displayartistinfo(artist_link, this));
};

RCApp.displayartistinfo = function(html_item, artist) {
  var all_links = document.getElementsByClassName('artist-link-item');
  for (var i = 0; i < all_links.length; i ++) {
    all_links[i].className = 'no-highlight';
  }
  document.getElementById('desc').innerHTML=artist.description;
  html_item.className = 'highlight';
};

RCApp.show_artist_form_button_response = function() {
        RCApp.show_artist_form_button.className = 'hide';
        RCApp.new_artist_form.className = 'show';
};

RCApp.create_new_artist = function() {
        var name = document.getElementById('artist-name-input').value;
        var description = document.getElementById('artist-description-input').value;
        var new_artist = new RCApp.Artist(name, description);
        RCApp.all_artists.push(new_artist);
        new_artist.generateHTML();
        RCApp.show_artist_form_button.className = 'show';
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

RCApp.show_label_form_button_response = function() {
        RCApp.show_label_form_button.className = 'hide';
        RCApp.new_label_form.className = 'show';
};

RCApp.create_new_label = function() {
        var name = document.getElementById('label-name-input').value;
        var new_label = new RCApp.Label(name);
        new_label.generateHTML();
        RCApp.show_label_form_button.className = 'show';
        RCApp.new_label_form.className = 'hide';
};


RCApp.setButtonEvents();