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

      await queryInterface.bulkInsert('Contests', [
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

      const contests = await queryInterface.sequelize.query(
        `SELECT id from Contests;`
      );


      await queryInterface.bulkInsert('Names', [
        {
          contestId: contests[1].id,
          label: 'Rootlib',
          normalizedLabel: 'rootlib',
          description: 'The Root Library'',
          updatedBy: users[1].id
        },
        {
          contestId: contests[0].id,
          label: 'TheFreeList',
          normalizedLabel: 'thefreelist',
          description: 'The Free List',
          updatedBy: users[1].id
        },
        {
          contestId: contests[2].id,
          label: 'PopTweet',
          normalizedLabel: 'popTweet',
          description: 'Pop Tweet',
          updatedBy: users[1].id
        },
        {
          contestId: contests[2].id,
          label: 'TwitterScope',
          normalizedLabel: 'twitterScope',
          description: null,
          updatedBy: users[1].id
        }
      ], {});

      const names = await queryInterface.sequelize.query(
        `SELECT id from Names;`
      );

      return await queryInterface.bulkInsert('Votes', [
        {
          nameId: names[0].id,
          up: true,
          createdBy: users[0].id
        },
        {
          nameId: names[1].id,
          up: true,
          createdBy: users[0].id
        },
        {
          nameId: names[2].id,
          up: false,
          createdBy: users[1].id
        },
        {
          nameId: names[3].id,
          up: true,
          createdBy: users[1].id
        },
        {
          nameId: names[2].id,
          up: true,
          createdBy: users[1].id
        },
        {
          nameId: names[0].id,
          up: true,
          createdBy: users[1].id
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
