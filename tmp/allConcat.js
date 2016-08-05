var apiKey = require('./../.env').apiKey;
var GitHub = require('./../js/github.js').reposModule;

$(document).ready(function() {
  var gitUserObject = new GitHub();
    gitUserObject.getRepos();
});
