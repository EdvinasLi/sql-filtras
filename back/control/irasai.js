import express from "express";
import db from "../database/connect.js";
import Joi from "joi";
import { auth } from "../middleware/auth.js";
import { teamsValidator, matchValidator } from "../middleware/validate.js";
import upload from "../middleware/multer.js";
import { Op } from "sequelize";

const router = express.Router();

router.get('/matches/', async (req, res) => {
  try {
    let matches = await db.Rungtynes.findAll();
    matches = await Promise.all(matches.map(async match => {
      const teamOne = await db.Teams.findOne({
        where: { team_name: match.team1 },
      });
      const teamTwo = await db.Teams.findOne({
        where: { team_name: match.team2 },
      });
      match.team1 = teamOne;
      match.team2 = teamTwo;

      return match
    }))
    res.json(matches);
  } catch (error) {
    res.status(500).send({ message: "Įvyko serverio klaida" });
    console.log(error);
  }
})

router.get("/match/:id", async (req, res) => {
  try {
    const match = await db.Rungtynes.findByPk(req.params.id);

    const teamOne = await db.Teams.findOne({
      where: { team_name: match.team1 },
    });
    const teamTwo = await db.Teams.findOne({
      where: { team_name: match.team2 },
    });

    match.team1 = teamOne;
    match.team2 = teamTwo;
    res.json(match);
  } catch {
    res.status(500).send("Įvyko serverio klaida");
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const teamOne = await db.Teams.findOne({
//       where: { team_name: req.body.team1 },
//     });
//     const teamTwo = await db.Teams.findOne({
//       where: { team_name: req.body.team2 },
//     });
//     res.json({ teamOne, teamTwo });
//   } catch (error) {
//     //Pirmas variantas grąžinti tik statusą
//     //res.status(500).end()

//     //Antras variantas grąžinti tik statusą
//     //res.sendStatus(500)

//     res.status(500).send({ message: "Įvyko serverio klaida" });
//     console.log(error);
//   }
// });

//naujas irasas
// router.post(
//   "/",
//   upload.single("image"),
//   // auth,
//   teamsValidator,
//   async (req, res) => {
//     try {
//       if (req.file) {
//         req.body.image = "/uploads/" + req.file.filename;
//       }
//       new db.Teams(req.body).save();
//       res.json({ message: "Komandos irasas sekmingai sukurtas" });
//     } catch (error) {
//       res.status(500).send({ message: "Įvyko serverio klaida" });
//       console.log(error);
//     }
//   }
// );

router.post(
  "/match/",

  // auth,

  async (req, res) => {
    try {
      if (req.file) {
        req.body.image = "/uploads/" + req.file.filename;
      }
      new db.Rungtynes(req.body).save();
      res.json({ message: "Rungtyniu irasas sekmingai sukurtas" });
    } catch (error) {
      res.status(500).send({ message: "Įvyko serverio klaida" });
    }
  }
);

router.get(
  "/match/",

  // auth,
  // matchValidator,
  async (req, res) => {
    try {
      const match = await db.Rungtynes.findAll();

      res.json(match);
    } catch (error) {
      // res.status(500).send({ message: "Įvyko serverio klaida" });
      console.log(error);
    }
  }
);

//paieska

//CRUD - Create, Read, Update, Delete
//       POST    GET    PUT    DELETE

export default router;
