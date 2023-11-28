import { DataTypes, Model } from 'sequelize';
import sequelize from './../../sequelize';

class TransactionsDB extends Model {
  //public id!: number;
  //public firstName!: string;
  //public lastName!: string;
}

TransactionsDB.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    origen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destino: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER ,
      allowNull: false,
    },
    fecha_realizada: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'transactions',
  }
);
TransactionsDB.sync();
export default TransactionsDB;
