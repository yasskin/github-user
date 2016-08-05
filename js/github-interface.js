var apiKey = require('./../.env').apiKey;
var GitHub = require('./../js/github.js').reposModule;

$(document).ready(function() {
  var gitUser = new GitHub();
  $('#githubUsername').click(function() {
    var username = $('username').val();
    $('#username').val("");
    gitUser.getRepos(username);
  });
});
