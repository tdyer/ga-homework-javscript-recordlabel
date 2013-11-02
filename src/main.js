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
	//Set up the event listener for the add artist button.
	setAddArtistEvent: function() {
		RCApp.addArtistButton.addEventListener('click', RCApp.addArtistClick);
	},

	//Set up the Event Listener for the artist submit button.
	setSubmitArtistEvent: function() {
		RCApp.submitArtistButton.addEventListener('click', function(event) {
			event.preventDefault();
			RCApp.submitArtistClick();
		});
	},
	//Set up the Event Listener for the artist cancel button.
	setCancelArtistEvent: function() {
		RCApp.cancelArtistButton.addEventListener('click', function(event) {
			event.preventDefault();
			RCApp.hideArtistForm();
		});
	},

	//Define all Add Artist form functions.
	showArtistForm: function() {
		RCApp.artistForm.style.display = "block";
	},

	//Click event for Add Artist button. 
	addArtistClick: function() {
		RCApp.showArtistForm();
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

	hideArtistForm: function() {
		RCApp.artistForm.style.display = "none";
	},

	//Click event for Submit Artist button.
	submitArtistClick: function() {
		RCApp.addArtist();
		RCApp.addArtistHtml();
		RCApp.hideArtistForm();
	},
	//-----ALBUMS-----//
	//Set up event listener for the add album button


	//-----CONSTRUCTORS-----//
	//The 3 constructors for Label, Artist and record.
	Label: function (name) {
		this.name = name;
		this.artists = [];
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
RCApp.setAddArtistEvent();
RCApp.setSubmitArtistEvent();
RCApp.setCancelArtistEvent();


// Modify the display property of the HTML elements. Alternately, there may be a hidden property. 

