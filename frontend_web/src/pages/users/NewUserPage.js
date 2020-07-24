import React from "react";
import { NavLink } from "react-router-dom";
import MatIcon from "../../components/icons/MatIcon";

function NewUserPage(props) {
  return (
    <div>
      <div className="toolbar">
        <div className="titlebar">
          <NavLink to="/users" className="btn btn-light mr-1">
            <MatIcon name="keyboard_arrow_left" />
          </NavLink>
          <h5>Register New User</h5>
        </div>
      </div>
    </div>
  );
}

export default NewUserPage;
