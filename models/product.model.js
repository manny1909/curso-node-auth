const { Model, DataTypes, } = require('sequelize');

const PRODUCT_TABLE = 'products'

const ProductSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
}

class Product extends Model {
    static associate(db) {
        this.belongsToMany(db.orders, {
            as: 'orders',
            through: db.orderProducts,
            foreignKey:'productId',
            otherKey:'orderId'
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'product',
            timestamps: false
        }
    }
}
module.exports = {
    PRODUCT_TABLE,
    ProductSchema,
    Product,
}
