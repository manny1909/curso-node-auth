const { Model, DataTypes } = require('sequelize');

const ROLE_TABLE = 'roles'

const RoleSchema = {
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
    permissionScale: {
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:false
    }
}
class Role extends Model {
    static associate() {

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ROLE_TABLE,
            modelName: 'Role',
            timestamp: true,
        }
    }
}
module.exports = {
    ROLE_TABLE,
    RoleSchema,
    Role
}
