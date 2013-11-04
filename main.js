'use strict';

// Application namespace
var RCApp = RCApp|| {};


function RecordLabel(name) {
	this.name = name;
	this.artists = [];
  this.albums = [];
}

function Artist(name) {
	this.name = name;
	this.albums = [];
}

function Album(name) {
	this.name = name;
	this.artists = [];
}
