const { DataTypes, Model } = require('sequelize');
const USER_ROLE_TABLE = 'user_roles'
const UserRoleSchema = {
 id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement:true,
 },
 userId: {
    field:'user_id',
    type: DataTypes.INTEGER,
    allowNull:true,
    references:{
        model: 'users',
        key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
 },
 roleId: {
    field:'role_id',
    type: DataTypes.INTEGER,
    allowNull:true,
    references:{
        model: 'roles',
        key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
 }
}
class UserRole extends Model{
    static associate(db){
        
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: USER_ROLE_TABLE,
            modelName: 'UserRole',
            timestamps: false
        }
    }
}
module.exports = {USER_ROLE_TABLE, UserRoleSchema, UserRole}

