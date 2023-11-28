import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";

class AccountDB extends Model {
  //public id!: number;
  //public firstName!: string;
  //public lastName!: string;
}

AccountDB.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "user", // Nombre de la tabla referenciada (user en este caso)
        key: "id", // Nombre de la columna referenciada (id en este caso)
      },
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saldo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "account",
  }
);
AccountDB.sync();
export default AccountDB;
