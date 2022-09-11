import { DataTypes } from "sequelize";

const Points = (sequelize) => {
  const Schema = {
    points: {
      type: DataTypes.STRING, //=VARCHAR(255)
      allowNull: false, //neleidžiamas tuščias laukas - Standartinė reikšmė true
    },
    team: {
      type: DataTypes.STRING, //=VARCHAR(255)
      allowNull: false, //neleidžiamas tuščias laukas - Standartinė reikšmė true
    },
    time: {
      type: DataTypes.STRING, //= TEXT
      allowNull: false,
    },
  };

  return sequelize.define("Points", Schema);
};

export default Points;
