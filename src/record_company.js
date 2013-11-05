var RCApp = RCApp || {};

RCApp.RecordLabel = function(name, description){
    this.name = name;
    this.description = description;
    this.artists = [];
    this.albums = [];
    // this.artistsEl = document.getElementById('artists');
    // this.albumsEl = document.getElementById('albums');
    // this.hideNewArtistForm();
    // this.hideNewAlbumForm();

    document.getElementById('rc-name').innerHTML = "<h1>" + this.name + "</h1>";
    document.getElementById('rc-description').innerHTML = "<h3>" + this.description + "</h3>";
    
    var mylabelname = document.getElementById('rc-description').innerHTML;

    registerEventHandler(document.getElementById('add-artist-form'), 'submit', this.createArtist.bind(this));
    registerEventHandler(document.getElementById('add-album-form'), 'submit', this.createAlbum.bind(this));
};

// Instance Methods
RCApp.RecordLabel.prototype.createArtist = function(event){
 // TODO: cache the add artist input fields
 var name = document.getElementById('add-artist-name').value,
 desc = document.getElementById('add-artist-desc').value,
 artist = new RCApp.Artist(name, desc);
 artist.generateHTML();
 this.artists.push(artist);
 RCApp.RecordLabel.hideArtistForm();
 event.preventDefault();
 return false;
};

RCApp.RecordLabel.prototype.createAlbum = function(event){
 var name = document.getElementById('add-album-name').value,
 desc = document.getElementById('add-album-desc').value,
 genre = document.getElementById('add-album-genre').value,
 album = new RCApp.Album(name, desc, genre);
 album.generateHTML();
 this.albums.push(album);
 RCApp.RecordLabel.hideAlbumForm();
 event.preventDefault();
 return false;
};

// Class Methods
RCApp.RecordLabel.setupHandlers = function(){
  // this.addArtistButtonHandler();
 registerEventHandler(document.getElementById('add-artist'), 'click', this.showArtistForm);
 registerEventHandler(document.getElementById('add-album'), 'click', this.showAlbumForm);
};

RCApp.RecordLabel.showArtistForm = function(){
  document.getElementById('add-artist-form').style.display = 'block';
};

RCApp.RecordLabel.showAlbumForm = function(){
  document.getElementById('add-album-form').style.display = 'block';
};

RCApp.RecordLabel.hideArtistForm = function(){
  document.getElementById('add-artist-form').style.display = 'none';
};

RCApp.RecordLabel.hideAlbumForm = function(){
  document.getElementById('add-album-form').style.display = 'none';
};


