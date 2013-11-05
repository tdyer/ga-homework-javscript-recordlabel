var RCApp = RCApp || {};

RCApp.Artist = function(name, description){
	this.name = name;
	this.description = description;
};

// Instance Metods

RCApp.Artist.prototype.generateHTML = function(){
   var artists_list = document.getElementById('artists'),
   html = "<li id='" + this.name + "'>" + this.name + "      <button id='"+ this.name + "'> Show " + this.name + "</button></li>";
   artists_list.innerHTML += html;
   this.setupHandlers();
};

RCApp.Artist.prototype.setupHandlers = function(){
 registerEventHandler(document.getElementById(this.name), 'click', this.showArtist.bind(this));
};

RCApp.Artist.prototype.showArtist = function(){
  var showText = "<div id='"+ this.name + "_desc'><br/>Description: <p>" + this.description + "</p>";	
  if(document.getElementById(this.name + "_desc") === null){
    document.getElementById(this.name).innerHTML += showText;
  };
};
