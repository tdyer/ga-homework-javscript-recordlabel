var recordlabels: [];

RCApp.RecordLabel = function(name, description) {
  this.name = name;
  this.description = description;
};

// RCApp.RecordLabel.prototype.generate_html = function() {
//   var names = document.getElementById('rc-name').innerHTML,
//   descriptions = document.getElementById('rc-description').innerHTML,
//   names_max = names.length,
//   descriptions_max = descriptions.length,
//   i = 0;

//   for (;i<names_max;) {
//     names += recordlabels[i].name;
//     descriptions += recordlabels[i].description;
//     i = i + 1;
//   }
//   document.getElementById('rc-name').innerHTML = names;
//   document.getElementById('rc-description').innerHTML = descriptions;
// };