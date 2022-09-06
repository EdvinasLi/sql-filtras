import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerMain">
      <ul>
        <Link to="/">
          <li>Titulinis</li>
        </Link>
        <Link to="/Login">
          <li>Login</li>
        </Link>
        <Link to="/registracija">
          <li>Registracija</li>
        </Link>
      </ul>
    </div>
  );
}
