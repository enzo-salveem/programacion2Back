import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('bancoProgramacion', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: { freezeTableName: true, timestamps: false },
  logging: false
  // Otros parámetros de configuración según sea necesario
});

export default sequelize;
