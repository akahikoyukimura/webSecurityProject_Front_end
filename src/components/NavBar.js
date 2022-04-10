import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div class="nav">
      <Link to="/" class="nav-link">
        CLIENT
      </Link>
      <Link to="/command" class="nav-link">
        COMMAND
      </Link>
      <Link to="/searchCommandsByClient" class="nav-link">
        CLIENT'S COMMANDS
      </Link>
    </div>
  );
}

export default NavBar;
