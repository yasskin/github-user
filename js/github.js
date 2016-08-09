var apiKey = require('./../.env').apiKey;

function GitHub(){
}

GitHub.prototype.getRepos = function(username) {

  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('#user-show').show();
    $('.response-login').empty("");
    $('.response-login').append(response.login);
    $('#response-avatar').empty("");
    $('#response-avatar').append("<img src=" + response.avatar_url + ">");
    $('#response-name').empty("");
    $('#response-name').append(response.name);
    $('#response-bio').empty("");
    $('#response-bio').append(response.bio);
    $('#response-location').empty("");
    $('#response-location').append(response.location);
    $('#response-count').empty("");
    $('#response-count').append(response.public_repos);
    $('#response-followers').empty("");
    $('#response-followers').append(response.followers);
    $('#response-following').empty("");
    $('#response-following').append(response.following);
    $('#response-ratio').empty("");
    var ratio = (response.followers / response.following);
    var r = ratio.toFixed(2);
    $('#response-ratio').append(r);
    highScoreGenerator(r);
    $('#user-list').empty("");
    for (var i = 0; i < response.length; i ++) {
      $('#user-list').append("<li>" + response[i].name + " : " + "</li>");
    };
console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $('#error-show').show();
    $('#error-text').text(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + username + '/repos?&per_page=200&access_token=' + apiKey).then(function(response){
    $('#results-show').show();
    $('#repository-list').empty("");
    for (var i = 0; i < response.length; i ++) {
      $('#repository-list').append("<li>" + response[i].name + " | " + response[i].description + "</li>");
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $('#error-show').show();
    $('#error-text').text(error.responseJSON.message);
  });
};


exports.reposModule = GitHub;
