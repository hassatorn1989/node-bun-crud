import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('db_next_repair', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

export default sequelize;