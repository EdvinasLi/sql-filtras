import { DataTypes } from "sequelize";

const Vartotojai = (sequelize) => {
  const Schema = {
    first_name: {
      type: DataTypes.STRING, //=VARCHAR(255)
      allowNull: false, //neleidžiamas tuščias laukas - Standartinė reikšmė true
    },
    last_name: {
      type: DataTypes.STRING, //=VARCHAR(255)
      allowNull: false, //neleidžiamas tuščias laukas - Standartinė reikšmė true
    },
    email: {
      type: DataTypes.STRING, //= TEXT
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING, //= TEXT
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING, //= TEXT
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING, //= TEXT
      allowNull: false,
    },
  };

  return sequelize.define("Vartotojai", Schema);
};

export default Vartotojai;
