import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addmatch = () => {
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
  const [postForm, setPostForm] = useState({
    start_date: "",
    end_date: "",
    team1: "",
    team2: "",
  });

  const navigate = useNavigate();

  const handleForm = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postForm);
    const form = new FormData();

    for (const key in postForm) {
      form.append(key, postForm[key]);
    }

    axios
      .post("/api/irasai/match/", postForm)
      .then((resp) => {
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((error) => {
        window.scrollTo(0, 0);

        if (error.response.status === 401)
          setTimeout(() => navigate("/"), 2000);
      });
  };

  return (
    <div className="container">
      <h1>Sukurti rungtyniu irasa</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group mb-2">
          <label className="mb-1">Pradzios data:</label>
          <input
            type="date"
            name="start_date"
            className="form-control"
            onChange={(e) => handleForm(e)}
          />
        </div>
        <div className="form-group mb-2">
          <label className="mb-1">Pabaigos data:</label>
          <input
            type="date"
            name="end_date"
            className="form-control"
            onChange={(e) => handleForm(e)}
          />
        </div>
        <div className="form-group mb-3">
          <label for="cars">Pasirinkti pirmaja komanda:</label>

          <select
            name="team1"
            id="pirmoji_komanda"
            onChange={(e) => handleForm(e)}
          >
            {teams.map((team) => (
              <option value={team.team_name}>{team.team_name}</option>
            ))}
          </select>
          <label for="cars">Pasirinkti antraja komanda:</label>

          <select
            name="team2"
            id="antroji_komanda"
            onChange={(e) => handleForm(e)}
          >
            {teams.map((team) => (
              <option value={team.team_name}>{team.team_name}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Siųsti</button>
      </form>
    </div>
  );
};

export default Addmatch;
