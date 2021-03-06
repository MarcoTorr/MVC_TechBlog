const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PostUser extends Model {}

PostUser.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key:'id',
          unique:false
        }
      },  
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key:'id',
          unique:false
        }
      }  
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'postUser',
    }
  );
  
  module.exports = PostUser;
  