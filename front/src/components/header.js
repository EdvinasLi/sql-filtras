import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    // <div className="headerMain">
    //   <ul>
    //     <Link to="/">
    //       <li>Titulinis</li>
    //     </Link>
    //     <Link to="/Login">
    //       <li>Login</li>
    //     </Link>
    //     <Link to="/registracija">
    //       <li>Registracija</li>
    //     </Link>
    //     <Link to="/addteam"> Prideti komanda</Link>
    //     <Link to="/addmatch"> Prideti varzybas</Link>
    //     <Link to="/match"> Match pavizdys</Link>
    //   </ul>
    // </div>

    <div className="headerMainBody">
      <div className="headerContent">
        <div className="headerLogo">
          <Link to="/"> edvinasBET</Link>
        </div>
        <div className="headerRight">
          <div className="linkai">
            <ul>
              <li>
                <Link to="/match"> Match pavizdys</Link>
              </li>
              <li>
                <Link to="/addmatch"> Prideti varzybas</Link>
              </li>
              <li>
                <Link to="/addteam"> Prideti komanda</Link>
              </li>
            </ul>
          </div>
          <div className="login">
            <ul>
              <li>
                <Link to="/login"> Prisijungti</Link>
              </li>
              <li>
                <Link to="/register"> Registruotis</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
