import { DataTypes } from "sequelize";

const Teams = (sequelize) => {
  const Schema = {
    team_name: {
      type: DataTypes.STRING, //=VARCHAR(255)
      allowNull: false, //neleidžiamas tuščias laukas - Standartinė reikšmė true
    },
    logo: {
      type: DataTypes.STRING, //=VARCHAR(255)
      allowNull: false, //neleidžiamas tuščias laukas - Standartinė reikšmė true
    },
    tournament_name: {
      type: DataTypes.STRING, //= TEXT
      allowNull: false,
    },
  };

  return sequelize.define("Teams", Schema);
};

export default Teams;
