var apiKey = require('./../.env').apiKey;


GitHub = function() {
};

// GitHub.prototype.getName = function(username) {
//   $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
//     console.log(response[0].name);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// }

GitHub.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/yasskin?access_token=1e37edbe2c0ad2017ed42a1b46db61d630aae26e').then(function(response) {
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.reposModule = GitHub;
