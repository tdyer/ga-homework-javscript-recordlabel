var RCApp = {
  artistButton: document.getElementById('add-artist'),
  recordLabelButton: document.getElementById('add-record-label'),
  albumButton: document.getElementById('add-album'),
  artistToAlbumButton: document.getElementById('add-artist-to-album'),

  setButtonEvent: function() {
    RCApp.recordLabelButton.addEventListener('click', RCApp.clickRecordLabelResponse);
    RCApp.artistButton.addEventListener('click', RCApp.clickArtistResponse);
    RCApp.albumButton.addEventListener('click', RCApp.clickAlbumResponse);
    RCApp.artistToAlbumButton.addEventListener('click', RCApp.clickArtistToAlbumResponse);
  },

  clickRecordLabelResponse: function(){
    RCApp.promptRecordLabelInfo();
  },

  promptRecordLabelInfo: function() {
    var name = prompt("what is the name of the record label?"),
        description = prompt("please provide a descripton for the record label");
      RCApp.addRecordLabel(name, description);
  },
  
  addRecordLabel: function(name, description) {
  var recordName = document.getElementById('record-label-name'),
      recordDescription = document.getElementById('record-label-description'),
      artists = [],
      albums = [];

    recordName.innerHTML = name;
    recordDescription.innerHTML = description;
  },

  clickAlbumResponse: function(){
    RCApp.promptAlbumInfo();
  },

  promptAlbumInfo: function() {
    var title = prompt("what is the title of the album?"),
      description = prompt('please provide a short album description'),
      genre = prompt('what is the genre of the album?');
      RCApp.addAlbum(title, description, genre);
  },

  addAlbum: function(title, description, genre) {
  var albumsList = document.getElementById('albums-list'),
      artists = [],
      titleHeader = "<li> <h4> Title: " + title + "</h4>",
      genreItem = "<p> Genre: " + genre + "</p>",
      desriptionText = "<p> Description: " + description + "</p> </li>";

    albumsList.innerHTML = titleHeader + genreItem + desriptionText;
  },

  clickArtistResponse: function(){
    RCApp.promptArtistInfo();
  },

  promptArtistInfo: function() {
    var name = prompt("what is the name of the artist?"),
      description = prompt('please provide a short artist description');
      RCApp.addArtist(name, description);
  },

  addArtist: function(name, description) {
  var artistList = document.getElementById('artists-list'),
      albums = [],
      nameMain = "<li> <h4> Artist: " + name + "</h4>",
      desriptionInfo = "<p> Description: " + description + "</p> </li>";

    aristsList.innerHTML = nameMain + desriptionInfo;
  },

  clickArtistToAlbumResponse: function(){

  }
};

RCApp.setButtonEvent();
