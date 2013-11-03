var RCApp = {
  
  addLabelButton: document.getElementById('add-label-button'),
  addArtistButton: document.getElementById('add-artist-button'),
  createArtistButton: document.getElementById('create-artist-button'),
  addAlbumButton: document.getElementById('add-album-button'),
  createAlbumButton: document.getElementById('create-album-button'),
  labels: [],

  addEventListeners: function() {
    RCApp.addLabelButton.addEventListener('click', function(event) {
      event.preventDefault();
      RCApp.addLabelButtonResponse();
    });

    RCApp.addArtistButton.addEventListener('click', function(event) {
      event.preventDefault();
      RCApp.addArtistButtonResponse();
    });

    RCApp.createArtistButton.addEventListener('click', function(event) {
      event.preventDefault();
      RCApp.createArtistButtonResponse();
    });

    RCApp.addAlbumButton.addEventListener('click', function(event) {
      event.preventDefault();
      RCApp.addAlbumButtonResponse();
    });

    RCApp.createAlbumButton.addEventListener('click', function(event) {
      event.preventDefault();
      RCApp.createAlbumButtonResponse();
    });
  },

  addLabelButtonResponse: function() {
    var labelform = document.getElementById('add-label')
    var name = labelform.elements[0].value;
    new RCApp.RecordLabel(name);
    labelform.style.display = 'none';
    RCApp.addArtistButton.style.display = 'block';
    RCApp.addAlbumButton.style.display = 'block';
  },

  addArtistButtonResponse: function() {
    var artistForm = document.getElementById('add-artist-form');
    artistForm.style.display = 'block';
    RCApp.addArtistButton.style.display = 'none';
  },

  createArtistButtonResponse: function() {
    var artistForm = document.getElementById('add-artist-form');
    new RCApp.Artist(artistForm.elements[0].value, artistForm.elements[1].value);
    artistForm.style.display = 'none';
    RCApp.addArtistButton.style.display = 'block';
  },

  addAlbumButtonResponse: function() {
    var albumForm = document.getElementById('add-album-form');
    albumForm.style.display = 'block';
    RCApp.addAlbumButton.style.display = 'none';
  },

  createAlbumButtonResponse: function() {
    var albumForm = document.getElementById('add-album-form');
    new RCApp.Album(albumForm.elements[0].value, albumForm.elements[1].value, albumForm.elements[2].value);
    albumForm.style.display = 'none';
    RCApp.addAlbumButton.style.display = 'block';
  },

  listArtists: function() {
    var i = 0, list = document.getElementById('artists-list'), artistsArray = RCApp.labels[0].artists; 
    list.innerHTML = "";
    for (; i < artistsArray.length;) {
      list.innerHTML += "<li> <h4> Artist: " + artistsArray[i].name + "</h4> </li>";
      i += 1;
    };
  },

  listAlbums: function() {
    var i = 0, list = document.getElementById('albums-list'), albumsArray = RCApp.labels[0].albums; 
    list.innerHTML = "";
    for (; i < albumsArray.length;) {
      list.innerHTML += "<li> <h4> Album: " + albumsArray[i].title + "</h4> </li>";
      i += 1;
    };
  },

  RecordLabel: function(name) {
    this.name = name;
    this.artists = [];
    this.albums = [];
    RCApp.labels.push(this);
    document.getElementById('label-name').innerHTML = this.name;
  },

  Artist: function(name, description) {
    this.name = name;
    this.description = description;
    RCApp.labels[0].artists.push(this);
    RCApp.listArtists();
  },

  Album: function(title, description, genre) {
    this.title = title;
    this.description = description;
    this.genre = genre;
    this.artists = [];
    RCApp.labels[0].albums.push(this);
    RCApp.listAlbums();
  }

};

RCApp.addEventListeners();