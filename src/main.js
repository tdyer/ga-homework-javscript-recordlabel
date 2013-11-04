// Application namespace
var RCApp = {

  showArtistFormButton: document.getElementById('add-artist'),
  showAlbumFormButton: document.getElementById('add-album'),
  showLabelFormButton: document.getElementById('add-label'),

  addArtisttoAlbum: document.getElementById('add-artist-album'),

  artistFormButton: document.getElementById('new-artist'),
  albumFormButton:document.getElementById('new-album'),

  setButtonEvent: function() {
    RCApp.showArtistFormButton.addEventListener('click', RCApp.clickArtistResponse);
    RCApp.showAlbumFormButton.addEventListener('click', RCApp.clickAlbumResponse);
    RCApp.showLabelFormButton.addEventListener('click', RCApp.clickLabelResponse);

    RCApp.addArtisttoAlbum.addEventListener('click', function() {
      event.preventDefault();
      // call next function
    });

    RCApp.artistFormButton.addEventListener('click', function(){
      event.preventDefault();
      // function
    });

    RCApp.albumFormButton.addEventListener('click', function (){
      event.preventDefault();
      // function
    });
  },

  clickArtistResponse: function() {
    RCApp.addArtist(name, description);
  },

  addArtist: function(name, description) {
    var albums = [],
    all_artists = document.getElementById('artists'),
    name= "<li><p>Artist: " + name + "</p>",
    description = "Description: " + description + "</li>";

  all_artists.innerHTML = name + description;
  },

  clickAlbumResponse: function() {
    RCApp.showAlbumFormButton.className = 'show';
    RCApp.addAlbum.className = 'show';
    RCApp.addAlbum(name, description, genre);
  },

  addAlbum: function(name, description, genre) {
    var artists = [],
    all_albums = document.getElementById('albums'),
    name ="<li><p>Album: " + name + "</p>",
    description = "<p>Description: " + description + "</p>",
    genre = "<p>Genre: " + genre + "</p></li>";
    all_albums.innerHTML = name + description + genre;
  },

  clickLabelResponse: function() {
    var form = document.getElementById('label-form')
    form.style = "display:block;"
    RCApp.addLabel();
  },

  addLabel: function(name, description) {
    var artists = [],
    albums = [],
      labelName = document.getElementById('rc-name'),
      labelDescription = document.getElementById('rc-description');
  },

  clickArtistAlbumResponse: function () {
  }

};

RCApp.setButtonEvent();