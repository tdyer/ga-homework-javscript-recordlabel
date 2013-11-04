var artists: [];

RCApp.Artist = function(name) {
  this.name = name;
};

// RCApp.Artist.prototype.generate_html = function() {
//   var artistsHTML = document.getElementById('artists').innerHTML;
//   var max = artists.length,
//   i = 0;

//   for(; i<max;) {
//     artistsHTML += "<li class='artist'> Artist:" + artists[i].name + "<button id='add-artist-album'>Choose Album</button></li>";
//     i = i + 1;
//   }
//   document.getElementById('artists').innerHTML = artistsHTML;
};