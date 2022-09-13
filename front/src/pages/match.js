import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./match.css";

export default function Match() {
  const [points, setPoints] = useState([]);
  const [match, setMatch] = useState({
    team1: {},
    team2: {},
    team1_points: 0,
    team2_points: 0
  });
  // const [team, setTeam] = useState({
  //   teamOne: {},
  //   teamTwo: {},
  // });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/api/irasai/match/" + id)
      .then((resp) => {
        setMatch(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // useEffect(() => {
  //   axios
  //     .post("/api/irasai/", {
  //       team1: match.team1,
  //       team2: match.team2,
  //     })
  //     .then((resp) => {
  //       setTeam(resp.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [match]);

  const sendPoints = (e, attacking_team) => {
    e.preventDefault();
    const data = {
      points: e.target.value,
      team: match["team" + attacking_team].team_name,
      RungtyneId: match.id,
      time: "00:00",
    };
    console.log(data);

    axios
      .post("/api/points/", data)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };
  return (
    <div className="matchBody">
      <div className="matchCard">
        <span className="teamOne">
          <img src={match.team1.logo} alt={match.team1.team_name} />
          <h3>{match.team1.team_name}</h3>
          <p className="rez">{match.team1_points}</p>
          <span className="buttons">
            <button value={1} onClick={(e) => sendPoints(e, 1)}>
              1
            </button>
            <button value={2} onClick={(e) => sendPoints(e, 1)}>
              2
            </button>
            <button value={3} onClick={(e) => sendPoints(e, 1)}>
              3
            </button>
          </span>
        </span>

        <span className="versus">VS</span>

        <span className="teamTwo">
          <img src={match.team2.logo} alt={match.team2.team_name} />
          <h3>{match.team2.team_name}</h3>
          <p className="rez">{match.team2_points}</p>
          <span className="buttons">
            <button value={1} onClick={(e) => sendPoints(e, 2)}>
              1
            </button>
            <button value={2} onClick={(e) => sendPoints(e, 2)}>
              2
            </button>
            <button value={3} onClick={(e) => sendPoints(e, 2)}>
              3
            </button>
          </span>
        </span>
      </div>
    </div>
  );
}
