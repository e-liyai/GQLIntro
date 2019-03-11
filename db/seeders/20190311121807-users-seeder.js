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

      const users = await queryInterface.sequelize.query(
        `SELECT id from Users;`
      );

      queryInterface.bulkInsert('Contests', [
        {
          code: 'free-programming-books-site',
          title: 'Free Programming Books Site',
          description: 'A list of free online programming books, categorized by languages topics',
          status: 'draft',
          created_by: users[0].id
        },
        {
          code: 'visualize-most-popular-tweets',
          title: 'Visualize Most Popular Tweets',
          description: 'A site to constantly visualize the most popular tweets in your stream',
          status: 'published',
          created_by: users[0].id
        },
        {
          code: 'entrepreneurs-looknig-for-partnership',
          title: 'Interview Entrepreneurs Looking For Partnership',
          description: null,
          status: 'archived',
          created_by: users[1].id
        }
      ], {});


      queryInterface.bulkInsert('Names', [
        {
          contest_id: 'RootLib',
          label: 'rootlib',
          normalized_label: 'The Root Library',
          description: null,
          created_by: users[1].id
        },
        {
          contest_id: 'TheFreeList',
          label: 'thefreelist',
          normalized_label: 'The Free List',
          description: null,
          created_by: users[1].id
        },
        {
          contest_id: 'PopTweet',
          label: 'popTweet',
          normalized_label: 'Pop Tweet',
          description: null,
          created_by: users[1].id
        },
        {
          contest_id: 'TwitterScope',
          label: 'twitterscope',
          normalized_label: 'Twitter Scope',
          description: null,
          created_by: users[1].id
        }
      ], {});
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
