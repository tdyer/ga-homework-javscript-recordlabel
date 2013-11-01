
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

// A record company should have a hidden form that will add artists. The
// hidden form will be shown when the user clicks an "Add Artist"
// button. Then the user should be able to add an artist's name and
// description and create the artist. Once the artist is created it's
// name should be shown in the list of artists.


var RCApp = {

artistButton = document.getElementById('add-artist'),
albumButton = document.getElementById('add-album'),

setButtonEvent: function() {
	RCApp.artistButton.addEventListener('click', RCApp.clickResponseArtist);
	RCApp.albumButton.addEventListener('click'), RCApp.clickResponseAlbum);
}, 

clickResponseArtist: function() {

}, 

clickResponseAlbum: function() {

},

addArtist: function() {
	

},

var RecordLabel = function() {
	this.name = name; 

}; 

var Artist = function() {
	this.name = name; 
};

var Album = function() {
	this.name = name; 
};





}; 

