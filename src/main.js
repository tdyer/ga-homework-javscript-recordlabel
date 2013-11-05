// namespace for our application
var RCApp = RCApp || {};
(function(){
 var recordLabel = recordLabel || new RCApp.RecordLabel("Atlantic", "Atlantic Record Label");
 RCApp.RecordLabel.hideArtistForm(); 
 RCApp.RecordLabel.hideAlbumForm(); 
 RCApp.RecordLabel.setupHandlers();
})();

