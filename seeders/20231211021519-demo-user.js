'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        username: 'Jhonny Herrera',
        email: 'jhonny.javier.herrera.rincon@pwc.com',
        password: '$2b$10$0gl2Gau9Rcyg1E/hwceNkOMbHsfzbRVKoPiVNhecH8En8Ors5zZP6'
      },
      {
        username: 'Javier Herrera',
        email: 'jhonnyherrera1998@gmail.com',
        password: '$2b$10$0gl2Gau9Rcyg1E/hwceNkOMbHsfzbRVKoPiVNhecH8En8Ors5zZP6'
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
