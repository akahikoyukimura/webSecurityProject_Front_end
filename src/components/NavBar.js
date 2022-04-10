import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <Link to="/" className="nav-link">
        CLIENT
      </Link>
      <Link to="/command" className="nav-link">
        COMMAND
      </Link>
      <Link to="/searchCommandsByClient" className="nav-link">
        CLIENT'S COMMANDS
      </Link>
    </div>
  );
}

export default NavBar;
