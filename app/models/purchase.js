'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Purchase.init({
    citizenId: DataTypes.INTEGER,
    budgetId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    purchaseQuantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Purchase',
    underscored: true,
  });
  return Purchase;
};