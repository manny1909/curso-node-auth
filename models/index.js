'use strict';

require('dotenv').config();
const { Sequelize } = require('sequelize');
const { URI, ...config } = require(__dirname + '/../config/config.js');
const { USER_TABLE, User, UserSchema } = require('./user.model');
const { ROLE_TABLE, Role, RoleSchema } = require('./role.model');
const { PRODUCT_TABLE, Product, ProductSchema } = require('./product.model');
const { ORDER_TABLE, OrderSchema, Order } = require('./order.model');
const { USER_ROLE_TABLE, UserRole, UserRoleSchema } = require('./user-role.model');
const { ORDER_PRODUCT_TABLE, OrderProductSchema, OrderProduct } = require('./order-product.model');

function setupModels() {
  let db = {};
  let sequelize;
  console.log(URI)
  if (URI) {
    sequelize = new Sequelize(URI, config);
  } else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
  db.users = User.init(UserSchema, User.config(sequelize))
  db.userRoles = UserRole.init(UserRoleSchema, UserRole.config(sequelize))
  db.roles = Role.init(RoleSchema, Role.config(sequelize))
  db.products = Product.init(ProductSchema, Product.config(sequelize))
  db.orders = Order.init(OrderSchema, Order.config(sequelize))
  db.orderProducts = OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize))

  db.users.associate(db)
  db.userRoles.associate(db)
  db.roles.associate(db)
  db.products.associate(db)
  db.orders.associate(db)
  db.orderProducts.associate(db)

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  return db
}

module.exports = setupModels(); 
