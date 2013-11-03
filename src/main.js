var RCApp = {

  addLabelButtonEvent: function() {
    document.getElementById('add-label-button').addEventListener('click', function(event) {
      var labelform = document.getElementById('add-label')
      var name = labelform.elements[0].value;
      event.preventDefault();
      new RCApp.recordLabel(name);
      document.getElementById('label-name').innerHTML = name;
      labelform.style.display = 'none';
      RCApp.addArtistButtonEvent();
    });
  },

  addArtistButtonEvent: function() {
    var addArtistButton = document.getElementById('add-artist-button');
    addArtistButton.style.display = 'block';
    addArtistButton.addEventListener('click', function(event) {
      event.preventDefault();
      addArtistButton.style.display = 'none';
      RCApp.createArtistButtonEvent();
    });

  },

  createArtistButtonEvent: function() {
    var artistForm = document.getElementById('add-artist-form');
    var createArtistButton = document.getElementById('create-artist-button');
    artistForm.style.display = 'block';
    createArtistButton.addEventListener('click', function(event) {
        event.preventDefault();
        new RCApp.addArtist(artistForm.elements[0].value, artistForm.elements[1].value);
        artistForm.style.display = 'none';
        RCApp.addArtistButtonEvent();
      });
    RCApp.removeEventListeners();
  },

  listArtists: function() {
    var i = 0, list = document.getElementById('artists-list'), artistsArray = RCApp.labels[0].artists; 
    list.innerHTML = "";
    for (; i < artistsArray.length;) {
        list.innerHTML += "<li> <h4> Artist: " + artistsArray[i].name + "</h4> </li>";
        i += 1;
      };
  },

  labels: [],

  recordLabel: function(name) {
    this.name = name;
    this.artists = [];
    this.albums = [];
    RCApp.labels.push(this);
  },

  addArtist: function(name, description) {
    this.name = name;
    this.description = description;
    RCApp.labels[0].artists.push(this);
    RCApp.listArtists();
  },

  album: function(title) {
    this.title = title;
    artists: [];
  }

};

RCApp.addLabelButtonEvent();