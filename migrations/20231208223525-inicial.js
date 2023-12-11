'use strict';

const { USER_TABLE, UserSchema } = require('../models/user.model');
const { ROLE_TABLE, RoleSchema } = require('../models/role.model');
const { ORDER_TABLE, OrderSchema } = require('../models/order.model');
const { PRODUCT_TABLE, ProductSchema } = require('../models/product.model');
const {USER_ROLE_TABLE, UserRoleSchema} = require('../models/user-role.model')
const {ORDER_PRODUCT_TABLE, OrderProductSchema} = require('../models/order-product.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(ROLE_TABLE, RoleSchema)
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)
    await queryInterface.createTable(ORDER_TABLE, OrderSchema)
    await queryInterface.createTable(USER_ROLE_TABLE, UserRoleSchema)
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema)
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(ROLE_TABLE)
    await queryInterface.dropTable(PRODUCT_TABLE)
    await queryInterface.dropTable(ORDER_TABLE)
    await queryInterface.dropTable(USER_ROLE_TABLE, UserRoleSchema)
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE, OrderProductSchema)
  }
};
