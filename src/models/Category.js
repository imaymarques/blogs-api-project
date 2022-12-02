const category = (sequelize, DataTypes) => {
  const categories = sequelize.define('Category', {

    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {allowNull: false, type:DataTypes.STRING },
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  });
  return categories;
};

module.exports = category;