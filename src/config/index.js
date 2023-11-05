
import { DataTypes, Sequelize } from 'sequelize'
import { blogModels } from '../models/blogModel.js';
import { commentsModel } from '../models/commentModel.js';
const sequelize = new Sequelize('product_dp', 'root', 'Swale.123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

sequelize.authenticate().then(() => {
    console.log('connected')
}).catch((err) => {
    console.error("Error:", err)
})

// db
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.blog = blogModels(sequelize, DataTypes)
db.comment = commentsModel(sequelize, DataTypes);

// association
db.blog.hasMany(db.comment, { foreignKey: 'blogId' })
// db.comment.belongsTo(db.blog, { foreignKey: 'blogId' } );

export const DB = db