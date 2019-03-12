'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Users', [
        {
          email: 'samer@agilelabs.com',
          firstName: 'John',
          lastName: 'Doe',
          apiKey: 4242
        },
        {
          email: 'creative@mind.com',
          firstName: 'Creative',
          lastName: 'Mind',
          age: 43,
          apiKey: 1212
        }
      ], {});

      let users = await queryInterface.sequelize.query(
        `SELECT id from "Users";`
      );

      users = users[0]

      await queryInterface.bulkInsert('Contests', [
        {
          code: 'free-programming-books-site',
          title: 'Free Programming Books Site',
          description: 'A list of free online programming books, categorized by languages topics',
          states: 'draft',
          updatedBy: users[0].id
        },
        {
          code: 'visualize-most-popular-tweets',
          title: 'Visualize Most Popular Tweets',
          description: 'A site to constantly visualize the most popular tweets in your stream',
          states: 'published',
          updatedBy: users[0].id
        },
        {
          code: 'entrepreneurs-looknig-for-partnership',
          title: 'Interview Entrepreneurs Looking For Partnership',
          description: null,
          states: 'archived',
          updatedBy: users[1].id
        }
      ], {});

      let contests = await queryInterface.sequelize.query(
        `SELECT id from "Contests";`
      );

      contests = contests[0]

      await queryInterface.bulkInsert('Names', [
        {
          contestId: contests[1].id,
          label: 'Rootlib',
          normalizedLabel: 'rootlib',
          description: 'The Root Library',
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

      let names = await queryInterface.sequelize.query(
        `SELECT id from "Names";`
      );

      names = names[0]

      return await queryInterface.bulkInsert('Votes', [
        {
          nameId: names[0].id,
          up: true,
          createdBy: users[0].id
        },
        {
          nameId: names[2].id,
          up: true,
          createdBy: users[0].id
        },
        {
          nameId: names[1].id,
          up: true,
          createdBy: users[0].id
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Votes', null, {})
    await queryInterface.bulkDelete('Names', null, {})
    await queryInterface.bulkDelete('Contests', null, {})
    await queryInterface.bulkDelete('Users', null, {})
  }
};
