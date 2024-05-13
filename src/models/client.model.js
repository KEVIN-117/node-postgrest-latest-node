import { Model, DataTypes } from 'sequelize'

export const CLIENT_TABLE = 'client'

export const clientSchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'active',
  },
  profile: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
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

export class Client extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_TABLE,
      modelName: 'Client',
      timeStamp: false,
    }
  }
}
