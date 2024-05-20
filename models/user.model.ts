import sequelize from '../configs/db.config';
import { DataTypes, Model } from 'sequelize';

class User extends Model {
    public id!: number;
    public user_name!: string;
    public username!: string;
    public password!: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    user_name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    username: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    password: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    sequelize: sequelize,
});

export default User;