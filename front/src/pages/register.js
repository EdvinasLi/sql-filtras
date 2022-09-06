import React from "react";

export default function Register() {
  return (
    <div className="registerMain">
      <form action="">
        <input type="text" name="first_name" placeholder="Vardas" />
        <input type="text" name="last_name" placeholder="Pavarde" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Slaptazodis" />
        <input type="text" name="city" placeholder="Miestas" />
        <input type="text" name="country" placeholder="Salis" />
        <button>Register</button>
      </form>
    </div>
  );
}
