var database = require('./database.js');
var sql = require('./relational/sql.js');
var bcrypt = require('bcryptjs');
var user = require('./object/user.js');


exports.getIDUser = function(idUser, callback) {
  console.log('relational.postUser ' + idUser);
  if (typeof idUser !== "undefined") {
    database.getQueryResult(sql.selectUser(idUser), function(err, result) {
      u = null;
      if (result !== undefined && result != null && result.length > 0) {
        u = new user();
        u.idUser = result[0].idUser;
        u.idAgent = result[0].idAgent;
        u.idMerchant = result[0].idMerchant;
        u.idConsumer = result[0].idConsumer;
        u.idCustomer = result[0].idCustomer;
        u.idDonor = result[0].idDonor;
        console.log(u);
      } else {
        return callback(new Error("user is null"), null);
      }
      return callback(err, u);
    });
  } else {
    return callback(new Error("typeof name === \"undefined\""), null);
  }
};


exports.setUser = function(user,callback) {
  
}
