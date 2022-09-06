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
    points: {
      type: DataTypes.CHAR, //= TEXT
      allowNull: false,
    },
  };

  return sequelize.define("Rungtynes", Schema);
};

export default Rungtynes;
