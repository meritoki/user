var properties = require('../../properties.js');
var user = require('../user.js');

exports.delete = function(router) {
  console.log('service.path.delete()');
};

exports.get = function(router) {
  console.log('service.path.get()');
};

exports.post = function(router) {
  console.log('service.path.post()');
  router.post("/v1/user/id", user.postIDUser);
  router.post("/v1/user", user.postUser);
};
