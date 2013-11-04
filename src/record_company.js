var RCApp = RCApp || {};

RCApp.RecordLabel = function(name, description){
    this.name = name;
    this.description = description;
    this.artists = [];
    this.albums = [];
    this.artists = document.getElementById('artists');
    this.albums = document.getElementById('albums');
    this.addArtistForm = document.getElementById('add-artist-form');
    this.addAlbumForm = document.getElementById('add-album-form');
    
    this.hideNewArtistForm();
    this.hideNewAlbumForm();

    document.getElementById('rc-name').innerHTML = this.name;
    document.getElementById('rc-description').innerHTML = this.description;
    
};
RCApp.RecordLabel.prototype.hideNewArtistForm = function(){
  this.addArtistForm.style.display = 'none';
};

RCApp.RecordLabel.prototype.hideNewAlbumForm = function(){
  this.addAlbumForm.style.display = 'none';
};
RCApp.RecordLabel.prototype.addArtist = function(artist){
  artist.generate_html();
  this.albums.push(artist);
};

RCApp.RecordLabel.prototype.addAlbum = function(album){
  album.generate_html();
  this.albums.push(album);
};
