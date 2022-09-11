import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Match() {
  const [match, setMatch] = useState([]);
  const [team, setTeam] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/api/irasai/match/" + id)
      .then((resp) => {
        setMatch(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("/api/irasai/")
      .then((resp) => {
        setTeam(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section className="card">
        <div className="body">
          <span className="row">
            <div className="info">
              <span className="logot">
                <img src={team.logo} alt={team.team_name} />
                <h3>{match.team2}</h3>
                <p className="rez">{match.team1_points}</p>
              </span>

              <h1>VS</h1>
              <span className="logot">
                <h3>{match.team1}</h3>
                <p className="rez">{match.team2_points}</p>
              </span>
            </div>
          </span>
        </div>
      </section>
    </div>
  );
}
