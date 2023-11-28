import { DataTypes, Model } from "sequelize";
import sequelize from "../../sequelize";
import AccountDB from "./dbAccount";

class UserDB extends Model {
  //public id!: number;
  //public firstName!: string;
  //public lastName!: string;
}

UserDB.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    groups: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_permissions: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_staff: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_superuser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_joined: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);
UserDB.hasMany(AccountDB, { foreignKey: 'userId' });
UserDB.sync();
export default UserDB;
