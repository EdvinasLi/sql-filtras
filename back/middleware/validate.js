import Joi from "joi";
const validate = (schema, req, res, next) => {
  const options = {
    abortEarly: true,
    stripUnknown: true,
  };
  const { error, value } = schema.validate(req.body, options);
  let message = "";

  if (error) {
    switch (error.details[0].path[0]) {
      case "email":
        message = "Neteisingai nurodytas email";
        break;
      case "password":
        message = "Neteisingai nurodytas slaptažodis";
        break;

      case "first_name":
        message = "Neteisingai nurodytas vardas";
        break;
      case "title":
        message = "Neteisingai nurodytas pavadinimas";
        break;
      case "last_name":
        message = "Neteisingai nurodyta pavarde";
        break;
      default:
        message = "Neteisingai nurodyti duomenys";
    }
    console.log(`Error: ${error}`);
    return res.status(500).send(message);
  }

  req.body = value;
  next();
};
export const teamsValidator = (req, res, next) => {
  const schema = Joi.object({
    team_name: Joi.string().min(5).max(255).required(),
    tournament_name: Joi.string().allow(""),
    logo: Joi.string().allow(""),
  });
  console.log(req.body);
  validate(schema, req, res, next);
};

export default validate;

export const registerValidator = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().min(3).max(50).required(),
    last_name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(50).required(),
    city: Joi.string().min(3).max(50).required(),
    country: Joi.string().min(3).max(50).required(),
  });
  validate(schema, req, res, next);
};

export const matchValidator = (req, res, next) => {
  const schema = Joi.object({
    start_date: Joi.string().min(3).max(50).required(),
    end_date: Joi.string().min(3).max(50).required(),
    team1: Joi.string().required(),
    team2: Joi.string().required(),
  });
  validate(schema, req, res, next);
};

export const loginValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(50).required(),
  });
  validate(schema, req, res, next);
};
