const { Model, DataTypes, Sequelize } = require('sequelize')

const USER_TABLE = 'users'

const UserSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}
class User extends Model {
    static associate(db) {
        //asociaciones de claves foráneas
        this.hasMany(db.orders, {
            as:'ordersByUser',
            foreignKey:'userId'
        })
        this.belongsToMany(db.roles, {
            as: 'roles',
            through: db.userRoles,
            foreignKey: 'userId',
            otherKey: 'roleId'
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName:USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = {
    USER_TABLE,
    UserSchema,
    User,
}
