var apiKey = require('./../.env').apiKey;

function GitHub(){
}

GitHub.prototype.getRepos = function(username) {

  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response[0].name);
    console.log(response[0].description);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.reposModule = GitHub;
