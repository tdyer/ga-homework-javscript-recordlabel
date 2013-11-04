// Application namespace
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

  all_artists: [],
  all_albums: []

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
};

RCApp.Album.prototype.generateHTML = function() {
  var html = '<li>' + this.name + '</li>';
  document.getElementById('albums').innerHTML += html;
};

RCApp.Album.prototype.generateHTML = function() {
  var new_li = document.createElement('li');
  new_li.innerHTML = '<a href=\"add_album\" id=\"' + this.name + '_link\"cllink-item\" >' + this.name + '</a>';
  document.getElementById('albums').appendChild(new_li);
};

RCApp.show_album_form_button_response = function() {
	RCApp.show_album_form_button.className = 'hide';
	RCApp.new_album_form.className = 'show';
};

RCApp.create_new_album = function() {
	var name = document.getElementById('album-name-input').value,
	description = document.getElementById('album-description-input').value,
	genre = document.getElementById('album-genre-input').value,
	new_album = new RCApp.Album(name, description, genre);
	RCApp.all_albums.push(new_album);
	new_album.generateHTML();
	new_album.set_link_event();
	RCApp.new_album_form.className = 'hide';
	RCApp.show_album_form_button.className = 'show';
};


RCApp.Album.prototype.set_link_event = function() {
  var link = document.getElementById(this.name + '_link');
  var object = this;
  link.addEventListener('click', function(event) {
    event.preventDefault();
    RCApp.highlight_name(link, object);
  });
};


RCApp.show_album_form_button_response = function() {
	RCApp.show_album_form_button.className = 'hide';
	RCApp.new_album_form.className = 'show';
};

///////////////////////

RCApp.Artist = function(name, description) {
  this.name = name;
  this.description = description;
  this.albums = [];
};

RCApp.create_new_artist = function() {
	var name = document.getElementById('artist-name-input').value;
	var description = document.getElementById('artist-description-input').value;
	var new_artist = new RCApp.Artist(name, description);
	RCApp.all_artists.push(new_artist);
	new_artist.generateHTML();
	new_artist.set_link_event();
	RCApp.show_artist_form_button.className = 'show';
	RCApp.new_artist_form.className = 'hide';
};

RCApp.Artist.prototype.generateHTML = function() {
  var new_li = document.createElement('li');
  new_li.innerHTML = '<a href=\"add_artist\" id=\"' + this.name + '_link\"class=\"link-item\" >' + this.name + '</a>';
  // var new_button = document.createElement('button');
  // new_button.innerHTML = 'Add Album to Artist\'s Catalog';
  document.getElementById('artists').appendChild(new_li);
  // new_li.appendChild(new_button);
  // new_button.addEventListener('click', RCApp.generateDropDownMenu);
};

// RCApp.generateDropDownMenu = function() {
// 	var select = document.createElement('select'),
// 	i = 0,
// 	max = RCApp.all_albums.length;
// 	for (; i < max ;) {
// 		var option = document.createElement('option');
// 		option.value = RCApp.all_albums[i];
// 		option.textContent = RCApp.all_albums[i].name;
// 	  select.appendChild(option);
// 	  i += 1;
//   }
//   this.parentNode.appendChild(select);
// };

// RCApp.Artist.prototype.addAlbum = function() {
  
// };

RCApp.Artist.prototype.set_link_event = function() {
  var link = document.getElementById(this.name + '_link');
  var object = this;
  link.addEventListener('click', function(event) {
    event.preventDefault();
    RCApp.highlight_name(link, object);
  });
};

RCApp.highlight_name = function(link, object) {
  var all_links = document.getElementsByClassName('link-item'),
  i = 0,
  max = all_links.length;
  for (; i < max; ) {
    all_links[i].className += ' no-highlight';
    i += 1;
  }
  link.className = 'link-item';
  link.className += ' highlight';
  RCApp.display_info(object);
};


RCApp.display_info = function(object) {
	var description_div = document.getElementById('desc');
	var object_description = '<p>' + object.description + '</p>';
	description_div.innerHTML = object_description;
	if (object.albums) {
	  var i = 0, max = object.albums.length, album_list = document.createElement('ul');
	  for (; i < max ;) {
	    var list_item =  '<li>' + object.albums[i].name + '</li>';
	    album_list.appendChild(list_item);
	    i += 1;
	  }
	description_div.innerHTML.appendChild(album_list);
  }

};


RCApp.show_artist_form_button_response = function() {
	RCApp.show_artist_form_button.className = 'hide';
	RCApp.new_artist_form.className = 'show';
};



/////////////////

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