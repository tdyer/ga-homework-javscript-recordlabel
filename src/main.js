var RCApp = {

	addArtistButton: document.getElementById('add-artist'),
	submitArtistButton: document.getElementById('artist-submit'),
	artistMenu: document.getElementById('artist-form'),

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

	//Define all Add Artist form functions.
	showArtistForm: function() {
		RCApp.artistMenu.style.display = "block";
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

	hideArtistForm: function() {
		RCApp.artistMenu.style.display = "none";
	},

	//Click even for Submit Artist button.
	submitArtistClick: function() {
		RCApp.addArtist();
		RCApp.hideArtistForm();

	},

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
	}

};

dfa = new RCApp.Label("DFA Records");
RCApp.setAddArtistEvent();
RCApp.setSubmitArtistEvent();


// Modify the display property of the HTML elements. Alternately, there may be a hidden property. 

