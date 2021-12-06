const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}


Comments.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      posting_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
          unique:false
        }
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id',
          unique:false
        }
      }  
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'comments',
    }
  );
  
  module.exports = Comments;
  