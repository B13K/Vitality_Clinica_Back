const { DataTypes, DATEONLY } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "schedule",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      hour: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_delete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
