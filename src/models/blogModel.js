import { UUIDV4 } from "sequelize";

export const blogModels = (sequelize, DataTypes) => {
    const blog = sequelize.define('blog', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER, // Assuming you want an integer for the ID
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false // If author can be null, you should specify it
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false // If content can be null, you should specify it
        }
    }, {
        timestamps: true // Corrected option name
    });

    return blog;
};
