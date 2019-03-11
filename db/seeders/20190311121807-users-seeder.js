'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [
        {
          email: 'samer@agilelabs.com',
          first_name: 'John',
          last_name: 'Doe',
          api_key: 4242
        },
        {
          email: 'creative@mind.com',
          first_name: 'Creative',
          last_name: 'Mind',
          api_key: 0000
        }
      ], {});

      const courses = await queryInterface.sequelize.query(
        `SELECT id from Users;`
      );
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
