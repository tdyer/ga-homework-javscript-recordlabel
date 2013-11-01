// Application namespace
var RCApp = {

	var Label: function() {
    this.artists = [];
	},

	var Artist: function(name, description) {
    this.name = name;
    this.description = description;
    this.albums = [];
	},

	var Album: funtion(name, description, genre) {
    this.name = name;
    this.description = description;
    this.genre = genre;
    this.artists = [];
	},

};
