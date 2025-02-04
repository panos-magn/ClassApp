import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <table>
        <ul>
          <li>
            <Link to="/">Αρχική</Link>
          </li>
          <li>
            <Link to="/education">Εδώ διαβάζουμε</Link>
          </li>
          <li>
            <Link to="/questions">Έλα να μαθουμε</Link>
          </li>
        </ul>
      </table>
    </nav>
  );
};

export default NavBar;
