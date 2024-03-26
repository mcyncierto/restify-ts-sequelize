'use strict';
import { Model } from 'sequelize';
export default (sequelize: any, DataTypes: { STRING: any; DATE: any; }) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Client.init({
    clientName: DataTypes.STRING,
    clientContact: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    lastUpdatedBy: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};