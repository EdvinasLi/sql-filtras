import { DataTypes } from "sequelize";

const Rungtynes = (sequelize) => {
  const Schema = {
    start_date: {
      type: DataTypes.STRING, //=VARCHAR(255)
      allowNull: false, //neleidžiamas tuščias laukas - Standartinė reikšmė true
    },
    end_date: {
      type: DataTypes.STRING, //=VARCHAR(255)
      allowNull: false, //neleidžiamas tuščias laukas - Standartinė reikšmė true
    },
    team1: {
      type: DataTypes.CHAR, //= TEXT
      allowNull: false,
    },
    team2: {
      type: DataTypes.CHAR, //= TEXT
      allowNull: false,
    },
    team1_points: {
      type: DataTypes.CHAR, //= TEXT
      allowNull: false,
    },
    team2_points: {
      type: DataTypes.CHAR, //= TEXT
      allowNull: false,
    },
  };

  return sequelize.define("Rungtynes", Schema);
};

export default Rungtynes;
