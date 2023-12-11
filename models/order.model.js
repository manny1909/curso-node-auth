const { Model, DataTypes, Sequelize } = require('sequelize');

const ORDER_TABLE = 'orders'
const OrderSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'users', // Nombre de la tabla referenciada
            key: 'id',      // Clave primaria de la tabla referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
};

class Order extends Model {

    static associate(db) {
        this.belongsTo(db.users, {
            as: 'user'
        })
        this.belongsToMany(db.products, {
            as: 'items',
            through: db.orderProducts,
            foreignKey: 'orderId',
            otherKey: 'productId'
        })

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_TABLE,
            modelName: 'Order',
            timestamps: false,
        }
    }
    get total() {
        if (this.items && this.items.length > 0) {
            return this.items.reduce((total, item) => total + item.price * item.orderProduct.amount, 0);
        }
        return 0;
    }
}
module.exports = {
    ORDER_TABLE,
    OrderSchema,
    Order,
}
