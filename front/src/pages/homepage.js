import React from "react";
import "./homepage.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Homepage() {
  const [match, setMatch] = useState([]);
  useEffect(() => {
    axios
      .get("/api/irasai/match/")
      .then((resp) => {
        console.log(resp.data);
        setMatch(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section className="card">
        <div className="body">
          <span className="row">
            {match.map((match) => (
              <div className="info">
                <span className="logot">
                  <img src={match.team1} alt="nera" />
                  <h3>{match.team2}</h3>
                  <p className="rez">15</p>
                </span>

                <h1>VS</h1>
                <span className="logot">
                  <h3>{match.team1}</h3>
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
