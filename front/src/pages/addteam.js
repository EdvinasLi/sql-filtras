import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Addteam = () => {
  const [team, setTeam] = useState({
    team_name: "",
    logo: "",
    tournament_name: "",
  });

  const handleForm = (e) => {
    setTeam({
      ...team,
      [e.target.name]:
        e.target.name === "image" ? e.target.files[0] : e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();

    for (const key in team) {
      form.append(key, team[key]);
    }
    axios
      .post("/api/irasai/", team)
      .then((resp) => {
        console.log("work");
        setTimeout(() => navigate("/"), 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Komandos pavadinimas</label>
        <input type="text" name="team_name" onChange={(e) => handleForm(e)} />
        <label>Logo</label>
        <input type="text" name="logo" onChange={(e) => handleForm(e)} />
        <label>Turnyro pavadinimas</label>
        <input
          type="text"
          name="tournament_name"
          onChange={(e) => handleForm(e)}
        />

        <button>Prideti</button>
      </form>
    </div>
  );
};

export default Addteam;

//Test
