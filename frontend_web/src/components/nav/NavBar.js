import React from "react";
import { NavLink } from "react-router-dom";
import UserProfile from "./UserProfile";
import useProfile from "../hooks/useProfile";

function NavBar() {
  useProfile();
  return (
    <header className="navbar container">
      <div className="content">
        <h3>Twiga - CCMS</h3>
        <div className="nav-links">
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/complaints">Complaints</NavLink>
            </li>
          </ul>
          <UserProfile />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
