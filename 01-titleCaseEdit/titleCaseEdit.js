function titleCaseEdit(title) {
  // Insert code here;
  title = title.toLowerCase();
  var words = title.split(' ');
  for( var i = 0; i < words.length; i++)
  {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
  }
    return words.join(" ");
}
// Do not edit this line;
module.exports = titleCaseEdit;