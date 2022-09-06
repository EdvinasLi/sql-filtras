import express from "express";
import db from "../database/connect.js";
import Joi from "joi";
import { auth } from "../middleware/auth.js";
import { teamsValidator, matchValidator } from "../middleware/validate.js";
import upload from "../middleware/multer.js";
import { Op } from "sequelize";

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
    const post = await db.Posts.findByPk(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).send({ message: "Įvyko serverio klaida" });
  }
});
//naujas irasas
router.post(
  "/",
  upload.single("image"),
  // auth,
  teamsValidator,
  async (req, res) => {
    try {
      if (req.file) {
        req.body.image = "/uploads/" + req.file.filename;
      }
      new db.Teams(req.body).save();
      res.json({ message: "Komandos irasas sekmingai sukurtas" });
    } catch (error) {
      res.status(500).send({ message: "Įvyko serverio klaida" });
    }
  }
);

router.post(
  "/match/",

  // auth,
  matchValidator,
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

//paieska

//CRUD - Create, Read, Update, Delete
//       POST    GET    PUT    DELETE

export default router;
