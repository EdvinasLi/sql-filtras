import React from "react";
import "./homepage.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

export default function Homepage() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    axios
      .get("/api/irasai/")
      .then((resp) => {
        console.log(resp.data);
        setTeams(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <section className="card">
        <div className="body">
          <span className="row">
            {teams.map((team) => (
              <div className="info" key={team.id}>
                <img src={team.logo} alt={team.team_name} />
                <h1>VS</h1>
                <img src={team.logo} alt={team.team_name} />
              </div>
            ))}
          </span>
        </div>
      </section>
    </div>
  );
}
