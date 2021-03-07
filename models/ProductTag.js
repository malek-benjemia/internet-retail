const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {

  // ProductTag.bulkCreate(productTagIdArr)
  static bulkCreate(productTagIdArr){
    for (i = 0; i < productTagIdArr.length; i++)  {
        return models.ProductTag.create({
        product_id: productTagIdArr[i].product_id,
        tag_id: productTagIdArr[i].tag_id
        })
    }
  }
}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
