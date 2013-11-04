  if(RCApp === undefined) {
    var RCApp = {};
  }

  RCApp.Artist = function(name, description) {
    this.name = name,
    this.description = description;
  };