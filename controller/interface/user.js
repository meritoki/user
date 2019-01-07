/*
 * Name: User.js
 * Date: 2015-07-08
 * Author: Joaquin Osvaldo Rodriguez
 */
var relational = require('../../model/relational.js');
var properties = require('../properties.js');
var http = require('http');

exports.postIDUser = function(req, res, next) {
  console.log('getIDUser');
  var idUser = req.body.idUser;
  relational.getIDUser(idUser, function (error, u) {
    console.log(u);
    if (error) {
      console.log(error);
      var status = 500;
      res.status(status).end(http.STATUS_CODES[status]);
    } else {
      var status = 200;
      res.status(status).end(JSON.stringify(u));
    }
  });
};

exports.postUser = function(req, res, next) {
  relational.setUser(req.body, function (error, boolean) {
    if (error) {
      console.log(error);
      var status = 500;
      res.status(status).end(http.STATUS_CODES[status]);
    } else {
      res.end(JSON.stringify(boolean));
    }
  });
}
