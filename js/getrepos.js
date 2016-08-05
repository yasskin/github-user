GetRepos = function () {
};

GetRepos.prototype.getRepos = function() {
  $.get('https://api.github.com/users/yasskin?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.getRepos = function(){
  $.get('https://api.github.com/users/yasskin?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.reposModule = GetRepos;
