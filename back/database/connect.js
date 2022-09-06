import { Sequelize } from "sequelize";
import mysql from "mysql2/promise";
import Rungtynes from "../models/rungtynes.js";
import Teams from "../models/teams.js";
import Vartotojai from "../models/vartotojai.js";

const database = {};
const credentials = {
  host: "localhost",
  user: "root",
  password: "",
  database: "edvinasBet",
};

try {
  const connection = await mysql.createConnection({
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
  });

  await connection.query(
    "CREATE DATABASE IF NOT EXISTS " + credentials.database
  );

  const sequelize = new Sequelize(
    credentials.database,
    credentials.user,
    credentials.password,
    { dialect: "mysql" }
  );

  database.Teams = Teams(sequelize);
  database.Vartotojai = Vartotojai(sequelize);
  database.Rungtynes = Rungtynes(sequelize);

  await sequelize.sync({ alter: false });
} catch (error) {
  console.log(error);
  console.log("Nepavyko prisijungti prie duomenų bazės");
}

export default database;
