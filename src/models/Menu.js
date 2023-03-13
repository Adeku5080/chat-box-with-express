module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "menu",
    {
      item_name: DataTypes.STRING,
      item_price: DataTypes.INTEGER,
    },
    {}
  );
  return Menu;
};
