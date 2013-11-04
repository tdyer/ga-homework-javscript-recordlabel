
// We're going to use JavaScript to create an application that will allow
// a record company to manage their artists and to associate the albums
// that artists have played on. You'll need to create a `record
// company`, `artists` and `albums` classes. There is no inheritance.
// The record company should have a list of artists and the artist *may*
// have played on one or more albums.

// Create a constructor method for Record Label, Artist and Album. These
// should all be 'namespaced' under the `RCApp` namespace. And the
// constructor will be used to create record label, artist and album
// objects.

// There is typically more that one artist on an album. 

// A record company should have a hidden form that will add artists. The
// hidden form will be shown when the user clicks an "Add Artist"
// button. Then the user should be able to add an artist's name and
// description and create the artist. Once the artist is created it's
// name should be shown in the list of artists.

// Each artist should have a hidden select or drop down where a user will be
// able to select an album they have played on. This drop down will be
// shown when the user selects the "Add Artist to Album" button. This
// button should be right next to the artist name.

// There should be a "Add Album" button that will add an album given it's
// name, description and genre.

// Each record label, artist and album should be able generate and insert the
// HTML that represents itself into the page. This HTML should be inserted
// when the artist or album is created.

// All the form submit events will captured. The handlers should prevent
// the default action from being seen by the browser.

// When clicking on an artist name it should show it's description and a
// list of all the names of albums they have played on. Also, their
// background color should be changed to indicate that they have been
// selected.

// At the bottom of the page should be section that will show either the
// artist or album's description when a user clicks.

var RCApp = {

	artists: [],

	albums: [],

	newArtistButton: document.getElementById('new-artist'),
	newAlbumButton: document.getElementById('new-album'),
	addArtistButton: document.getElementById('add-artist'),
	addAlbumButton: document.getElementById('add-album'),
	artistLink: document.getElementById('artists'), //might not be the correct ID

	setAllEvents: function() {
		RCApp.newArtistButton.addEventListener('click', RCApp.clickResponseNewArtist);
		RCApp.addArtistButton.addEventListener('click', RCApp.clickResponseAddArtist); 
		RCApp.newAlbumButton.addEventListener('click', RCApp.clickResponseNewAlbum);
		RCApp.addAlbumButton.addEventListener('click', RCApp.clickResponseAddAlbum);
		RCApp.artistLink.addEventListener('click', RCApp.clickResponseArtistLink);
	}, 

	clickResponseNewArtist: function() {
		RCApp.showArtistForm();
	},

	clickResponseAddArtist: function() {
		RCApp.addArtist();
	},

	clickResponseNewAlbum: function() {
		RCApp.showAlbumForm();
	}, 

	clickResponseAddAlbum: function() {
		RCApp.addAlbum();
	},

	clickResponseArtistLink: function() {
		RCApp.findArtistDesc();
		RCApp.showArtistDesc(); 
	}, 

	addArtist: function() {
		var name = document.getElementById('artist-name').value,
		description = document.getElementById('artist-desc').value, 
		artist_lists = document.getElementById('artists'); 
		RCApp.artists.push({artist_name: name, artist_desc: description , artist_albums: []});
		artist_lists.innerHTML += "<li>" + name + "</li>";
	},

	addAlbum: function() {
		var name = document.getElementById('album-name').value,
		genre = document.getElementById('album-genre').value,
		description = document.getElementById('album-desc').value, 
		album_lists = document.getElementById('albums'); 
		RCApp.albums.push({album_name: name, album_genre: genre,  album_desc: description , artists_in_album: []});
		album_lists.innerHTML += "<li>" + name + "   " + genre + " " + description + "</li>";
	},

	albumsDropDown: function() {
		var album_list = document.getElementById('album-list').innerHTML, albums_array = RCApp.albums; 
		i=0;
		for (; i < albums_array.length;) {
			album_list += "<option>" + albums_array[i].album_name + "</option>";
			i += 1;
		};
		document.getElementById('album-list').innerHTML = album_list;
	},

	showArtistDesc: function(name) {
		var artist_desc = document.getElementById('art_description'); 
		artist_desc.innerHTML = "<li >" + name + "Description:" + RCApp.findArtistDesc(name); + "</li>"
	}, 

	findArtistDesc: function(name) {
		var artist_list = RCApp.artists,
		i =0; 
		for (; i < artist_list.length ;) {
			if (artist_list[i].artist_name === name ) {
				return artist_list[i].artist_desc; 
			};
			i += 1;
		};
	}, 

	showArtistForm: function() {
		var artist_form = document.getElementById('artist-form');
		artist_form.className = "form, show";

	},

	showAlbumForm: function() {
		var album_form = document.getElementById('album-form');
		album_form.className = "form, show";
	},

};

RCApp.RecordLabel = function() {
	this.name = name; 

};

RCApp.Artist = function(name, description) {
	this.name = name;
	this.description = description;
	this.artist_object = {artist_name: name, artist_desc: description , artist_albums: []};
	RCApp.artists.push(this.artist_object);

};

RCApp.Artist.prototype.generate_html = function() {
	var artistHTML = document.getElementById('artists').innerHTML,
	max = RCApp.artists.length; 
	i = 0; 
	for(; i < max;) {
		artistHTML += "<li " + " "+  "onClick="+ "\"RCApp.showArtistDesc("+ RCApp.artists[i].artist_name  + ") >" + RCApp.artists[i].artist_name + "</li>";
		i += 1;
	};
	document.getElementById('artists').innerHTML = artistHTML;

};

RCApp.Album = function(name, genre, description) {
	this.name = name;
	this.genre = genre; 
	this.description = description;
	this.album_object = {album_name: name, album_genre: genre, album_desc: description, artists_in_album: [] };
	RCApp.albums.push(this.album_object);
};


RCApp.Album.prototype.generate_html = function() {
	var albumHTML = document.getElementById('albums').innerHTML,
	max = RCApp.albums.length; 
	i = 0; 
	for(; i < max;) {
		albumHTML += "<li id="+ i +  ">" + RCApp.albums[i].album_name + "   "  + RCApp.albums[i].album_desc + "</li>";
		i += 1;
	};
	document.getElementById('albums').innerHTML = albumHTML;

};

new RCApp.Album("Number 1s", "Pop", "Hits from 2013");
new RCApp.Album("Lungs", "Pop-rock", "Florence and the machinces, first album");
new RCApp.Artist("Adele", "Britsh Songtress with an amazing voice");
new RCApp.Artist("Mariah Carey", "Pop contemparary");
new RCApp.Artist("Florence & the Machince", "Britsh Indie Band Turned International Sensationation ");

RCApp.setAllEvents();
RCApp.Artist.prototype.generate_html();
RCApp.Album.prototype.generate_html();
RCApp.albumsDropDown();








