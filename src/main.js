// Application namespace
var RCApp = {
  artists: [],
  albums: [],


  // render_collection: function(collection_name) {
  //   var i = 0,
  //       array_length;
 
  //   array_length = this[collection_name].length
  //   for(;i<array_length;) {
  //     this[collection_name][i].render_item(collection_name);
  //     i = i + 1;
  //   };
  // }


//where RecordLabel would be
//where Artist would be
//where Album would be

  add_artist: function(e){
  var artist_name = "", artist,
  form = document.getElementById('artist-form');
  if (form.className ==='not_secret')
      form.className = 'secret';
  else
  form.className = 'not_secret'; 

  },

  
  add_album: function(e){
  var album_name = "", album,
  form = document.getElementById('album-form');
  if (form.className ==='not_secret')
      form.className = 'secret';
  else
  form.className = 'not_secret';
  }




  // artist_name = prompt("Name of Artist");
  // console.log("artist_name");
  // artist = new RCApp.Artist(artist_name);
  // CourseApp.artists.push(artist);
  // artist.render_item("artists");

  // Prompt the user for information to add a teacher
  // Append this teacher to the list of teachers on the page


};