var apiKey = require('./../.env').apiKey;

function GitHub(){
}

GitHub.prototype.getRepos = function(username) {
console.log("Communicating!");
};

exports.reposModule = GitHub;
