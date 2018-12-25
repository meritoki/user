/*
 * Name: User.js
 * Date: 2015-07-08
 * Author: Joaquin Osvaldo Rodriguez
 */
var relational = require('../../model/relational.js');
var properties = require('../properties.js');

exports.postUser = function(req, res, next) {
  console.log('getUser');
  console.log(req.body);
  var idUser = req.body.idUser;
  console.log('postUser '+idUser);
  relational.postUser(idUser, function (error, u) {
    if (error) {
      res.end(error);
    } else {
      res.end(JSON.stringify(u));
    }
  });
};
