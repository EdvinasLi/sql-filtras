import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header.js";
import Homepage from "./pages/homepage.js";
import Login from "./pages/login.js";
import Register from "./pages/register.js";
import Addteam from "./pages/addteam.js";
import Addmatch from "./pages/addmatch.js";
import Match from "./pages/match";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />)
        <Route path="/login" element={<Login />} />)
        <Route path="/registracija" element={<Register />} />)
        <Route path="/addteam" element={<Addteam />} />)
        <Route path="/addmatch" element={<Addmatch />} />)
        <Route path="/match/:id" element={<Match />} />)
      </Routes>
    </BrowserRouter>
  );
};

export default App;
