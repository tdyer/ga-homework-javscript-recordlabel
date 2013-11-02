var RCApp = {

	addArtistButton: document.getElementById('add-artist'),
	submitArtistButton: document.getElementById('artist-submit'),
	cancelArtistButton: document.getElementById('artist-cancel'),
	artistForm: document.getElementById('artist-form'),
	
	addAlbumButton: document.getElementById('add-album'),
	submitAlbumButton: document.getElementById('album-submit'),
	cancelAlbumButton: document.getElementById('album-cancel'),
	albumForm: document.getElementById('album-form'),

	//-----ARTIST-----//
	//Set up the event listener for the add artist, submit artist and cancel artist buttons.
	setAddArtistEvent: function() {
		RCApp.addArtistButton.addEventListener('click', RCApp.showArtistForm);
	},

	setSubmitArtistEvent: function() {
		RCApp.submitArtistButton.addEventListener('click', function(event) {
			event.preventDefault();
			RCApp.submitArtistClick();
		});
	},

	setCancelArtistEvent: function() {
		RCApp.cancelArtistButton.addEventListener('click', function(event) {
			event.preventDefault();
			RCApp.hideArtistForm();
		});
	},

	//Define functions to hide/show artist form. 
	showArtistForm: function() {
		RCApp.artistForm.style.display = "block";
	},

	hideArtistForm: function() {
		RCApp.artistForm.style.display = "none";
	},

	//Define all Add Artist functions
	addArtist: function() {
		var name = document.getElementById('artist-name').value,
		description = document.getElementById('artist-desc').value;
		dfa.artists.push(new RCApp.Artist(name, description));

	},

	addArtistHtml: function() {
		var artistList = document.getElementById('artists'),
		name = document.getElementById('artist-name').value
		nameHTML = "<li id='" + name + "'>" + name + "</li>";
		artistList.innerHTML += nameHTML;
	},

	//Click event for Submit Artist button.
	submitArtistClick: function() {
		RCApp.addArtist();
		RCApp.addArtistHtml();
		RCApp.hideArtistForm();
	},

	//-----ALBUMS-----//
	//Set up event listeners for the add album button, submit album button and cancel album button.
	setAddAlbumEvent: function() {
		RCApp.addAlbumButton.addEventListener('click', RCApp.showAlbumForm);
	},

	setSubmitAlbumEvent: function() {
		RCApp.submitAlbumButton.addEventListener('click', function(event) {
			event.preventDefault();
			RCApp.submitAlbumClick();
		});
	},

	setCancelAlbumEvent: function() {
		RCApp.cancelAlbumButton.addEventListener('click', function(event) {
			event.preventDefault();
			RCApp.hideAlbumForm();
		});
	},

	//Set up show/hide album form functions.
	showAlbumForm: function() {
		RCApp.albumForm.style.display = "block";
	},

	hideAlbumForm: function() {
		RCApp.albumForm.style.display = "none";
	},

	//Add album functions.
	addAlbum: function() {
		var name = document.getElementById('album-name').value,
		description = document.getElementById('album-desc').value,
		genre = document.getElementById('album-genre').value;
		dfa.albums.push(new RCApp.Album(name, description, genre));
	},

	//Define Sumbit album click functions
	submitAlbumClick: function() {
		RCApp.addAlbum();
	},

	//-----CONSTRUCTORS-----//
	//The 3 constructors for Label, Artist and record.
	Label: function (name) {
		this.name = name;
		this.artists = [];
		this.albums = [];
	},

	Artist: function(name, description) {
		this.name = name;
		this.description = description;
		this.albums = [];
	},

	Album: function(name, description, genre) {
		this.name = name;
		this.description = description;
		this.genre = genre;
		this.artists = [];
	}

};

dfa = new RCApp.Label("DFA Records");

//Set artist event listeners.
RCApp.setAddArtistEvent();
RCApp.setSubmitArtistEvent();
RCApp.setCancelArtistEvent();

//Set album event listeners. 
RCApp.setAddAlbumEvent();
RCApp.setSubmitAlbumEvent();
RCApp.setCancelAlbumEvent();

