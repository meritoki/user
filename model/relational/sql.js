exports.selectNameUser = function (name) {
    return 'SELECT u.id, u.idAccount, u.name, u.password, u.registerDate, u.activityDate, u.login, u.role, e.address AS email FROM auth.User u LEFT OUTER JOIN msg.Email e ON e.idUser=u.id WHERE name = \'' + name + '\';';
};


exports.selectUser = function (idUser) {
  return  'SELECT `user`.id AS idUser, agent.id AS idAgent, merchant.id AS idMerchant,consumer.id AS idConsumer,customer.id AS idCustomer,donor.id AS idDonor '+
          'From auth.`User` `user` '+
          'LEFT OUTER JOIN `user`.Agent agent ON `user`.id = agent.idUser '+
          'LEFT OUTER JOIN `user`.Merchant merchant ON `user`.id = merchant.idUser '+
          'LEFT OUTER JOIN `user`.Consumer consumer ON `user`.id = consumer.idUser '+
          'LEFT OUTER JOIN `user`.Customer customer ON `user`.id = customer.idUser '+
          'LEFT OUTER JOIN `user`.Donor donor ON `user`.id = donor.idUser '+
          'WHERE user.id = '+idUser+';'
};
