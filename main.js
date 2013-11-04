'use strict';

// Application namespace
var RCApp = {
	artists: [],
	albums: []
//	display list of artists
RCApp.RecordLabel = function() {
	// hidden form
	//add artist button - name, description
	this.name = name;
};

// id='rc-name>'
// id='rc-description'
// id='artists'
// id='desc'

  	addAlbumButton: document.getElementById('add-album'),
		albumForm: document.getElementById('album-form'),
    albumFormSubmitButton: document.getElementById('album-submit-button'),
// addRecordCompanyButton: document.getElementById('record_company'),
  // addArtistButton: document.getElementById('add-artist'),

  // artistForm: document.getElementById('artist-form'),
  // artistFormSubmitButton: document.getElementById('artist-submit-button')

  // albums: document.getElementById('albums'),
  // artists: document.getElementById('artists'),



  RCApp.Artist = function() {
  	var name;
  	var description;

	// hidden drop down - albums
	// add artist to album button

	this.name = name;
	this.description = description;
	this.albums = [];
};

RCApp.Album = function() {
	var name;
	var genre;
	var description;

	this.name = name;
	this.genre = genre;
	this.description = description;
	this.artists = [];
};

RCApp.add_album = function(dest) {
	var new_album = new RCApp.Album();
	dest.albums.push(new_album);
};

RCApp.add_artist = function(dest) {
	var new_artist = new RCApp.Artist();
	dest.artists.push(new_artist);
};




};
