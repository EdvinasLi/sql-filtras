import express from "express";
import db from "../database/connect.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const options = {};
  if (req.query.order) options.order = [(options.order = ["title", "DESC"])];

  try {
    const posts = await db.Teams.findAll(options);
    res.json(posts);
  } catch {
    //Pirmas variantas grąžinti tik statusą
    //res.status(500).end()

    //Antras variantas grąžinti tik statusą
    //res.sendStatus(500)

    res.status(500).send({ message: "Įvyko serverio klaida" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const points = await db.Points.findByPk(req.params.id);
    res.json(points);
  } catch (error) {
    res.status(500).send({ message: "Įvyko serverio klaida" });
  }
});
//naujas irasas
router.post("/", async (req, res) => {
  try {
    await db.Points.create(req.body);
    const match = await db.Rungtynes.findByPk(req.body.rungtynesId);
    console.log(match);
    await match.update({
      team1_points: match.team1_points + req.body.points,
    });
    console.log(req.body);
    res.json({ message: "Taskai sekmingai prideti" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Įvyko serverio klaida (taskai)" });
  }
});
//paieska

//CRUD - Create, Read, Update, Delete
//       POST    GET    PUT    DELETE

export default router;
