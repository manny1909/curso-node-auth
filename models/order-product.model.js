const { Model, DataTypes } = require("sequelize")

const ORDER_PRODUCT_TABLE = 'order_products'
const OrderProductSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    productId:{
        field: 'product_id',
        type: DataTypes.INTEGER,
        allowNull:true,
        references:{
            model: 'products',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    OrderId:{
        field: 'order_id',
        type:DataTypes.INTEGER,
        allowNull:true,
        references:{
            model:'orders',
            key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}
class OrderProduct extends Model {
    static associate(db){
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: ORDER_PRODUCT_TABLE,
            modelName: 'OrderProduct',
            timestamps: false
        }
    }
}
module.exports = { ORDER_PRODUCT_TABLE, OrderProductSchema, OrderProduct}
