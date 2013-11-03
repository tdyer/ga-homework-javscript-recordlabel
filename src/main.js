var RCApp = {

	addLabelButtonEvent: function() {
		document.getElementById('add-label-button').addEventListener('click', function(event) {
			var labelform = document.getElementById('add-label')
			var name = labelform.elements[0].value;
			event.preventDefault();
			new RCApp.RecordLabel(name);
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
			new RCApp.RecordLabel(artistForm.elements[0].value, artistForm.elements[1].value);
			artistForm.style.display = 'none';
			RCApp.addArtistButtonEvent();
		});
	},

	ListArtists: function() {
		
	},

	RecordLabel: function(name) {
		this.name = name;
		artists: [];
	},

	Artist: function(name, description) {
		this.name = name;
		this.description = description;
		RCApp.RecordLabel.push(this);
		RCApp.ListArtists();
	},

	Album: function(title) {
		this.title = title;
		artists: [];
	}

};

RCApp.addLabelButtonEvent();