var RCApp = {
	
	addLabelButton: document.getElementById('add-label-button'),
	addArtistButton: document.getElementById('add-artist-button'),
	createArtistButton: document.getElementById('create-artist-button'),
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
	},

	addLabelButtonResponse: function() {
		var labelform = document.getElementById('add-label')
		var name = labelform.elements[0].value;
		new RCApp.RecordLabel(name);
		labelform.style.display = 'none';
		RCApp.addArtistButton.style.display = 'block';
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

	listArtists: function() {
		var i = 0, list = document.getElementById('artists-list'), artistsArray = RCApp.labels[0].artists; 
		list.innerHTML = "";
		for (; i < artistsArray.length;) {
			list.innerHTML += "<li> <h4> Artist: " + artistsArray[i].name + "</h4> </li>";
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

	Album: function(title) {
		this.title = title;
		artists: [];
	}

};

RCApp.addEventListeners();