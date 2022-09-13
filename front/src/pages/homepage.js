import React from "react";
import "./homepage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Homepage() {
  const [matches, setMatches] = useState([]);
  const [team, setTeam] = useState({
    teamOne: {},
    teamTwo: {},
  });
  useEffect(() => {
    axios
      .get("/api/irasai/matches/")
      .then((resp) => {
        console.log(resp)
        setMatches(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // useEffect(() => {
  //   console.log(match)
  //   axios
  //     .get("/api/irasai/", {
  //       team1: match.team1,
  //       team2: match.team2,
  //     })
  //     .then((resp) => {
  //       console.log(resp.data);
  //       setTeam(resp.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [match]);
  return (
    <div>
      <section className="card">
        <div className="body">
          <span className="row">
            {matches.map((match) => (
              <div className="info">
                <span className="logot">
                  <img src={match.team2.logo} alt="nera" />

                  <h3>{match.team2.team_name}</h3>

                  <p className="rez">15</p>
                </span>

                <h1>VS</h1>
                <span className="logot">
                  <img src={match.team1.logo} alt="nera" />
                  <h3>{match.team1.team_name}</h3>
                  <p className="rez">15</p>
                </span>
              </div>
            ))}
          </span>
        </div>
      </section>
    </div>
  );
}
