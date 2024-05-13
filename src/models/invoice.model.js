import { Model, DataTypes } from 'sequelize'
import { CLIENT_TABLE } from './client.model.js'

export const INVOICE_TABLE = 'invoice'

export const invoiceSchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'pending',
  },
  client_id: {
    allowNull: true,
    type: DataTypes.UUID,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
    field: 'updated_at',
  },
}

export class Invoice extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: INVOICE_TABLE,
      modelName: 'Invoice',
      timeStamp: true,
    }
    /*

         */
  }
}
