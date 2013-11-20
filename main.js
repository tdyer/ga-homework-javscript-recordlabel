// Application namespace
var RCApp = {
artists: {},
albums: {}, // this makes it an object
addAlbumToArtist: function(album, artist) { // function
	if (RCApp.albums[album]) {
		RCApp.albums[album].artists.push(artist);
		RCApp.artists[artist].albums.push(album);
	}
},


};

