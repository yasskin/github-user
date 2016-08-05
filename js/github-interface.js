var GitHub = require('./../js/github.js').reposModule;

$(document).ready(function() {
  var gitUserObject = new GitHub();
  $('#githubUsername').click(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    $('#username').val("");
    gitUserObject.getRepos(username);
  });
});
