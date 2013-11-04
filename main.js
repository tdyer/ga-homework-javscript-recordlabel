'use strict';

// Application namespace
var RCApp = {
	artists: [],
	albums: []

RCApp.RecordLabel = function() {
	// hidden form
	//add artist button - name, description
	this.name = name;
};

RCApp.Artist = function() {
	var name;
	var description;

	this.name = name;
	this.description = description;
	this.albums = [];
};

RCApp.Album = function() {
	var name;

	this.name = name;
	this.artists = [];
},

RCApp.add_album = function(dest) {
	var new_album = new RCApp.Album();
  dest.albums.push(new_album);
},

RCApp.add_artist = function(dest) {
	var new_artist = new RCApp.Artist();
  dest.artists.push(new_artist);
}




};
