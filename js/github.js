var apiKey = require('./../.env').apiKey;

function GitHub(){
}

GitHub.prototype.getRepos = function(username) {

  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    $('#results-show').show();
    for (var i = 0; i < response.length; i ++) {
      $('#repository-list').append("<li>" + response[i].name + " : " + response[i].description + "</li>");
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $('#error-show').show();
    $('#error-text').text(error.responseJSON.message);
  });
};

exports.reposModule = GitHub;
