import React from "react";
import logo from "../../shared/logo.svg";

const Header = () => {

  return(
      <header className="App-header">
        <img src={logo} className="App-logo d-none sm" alt="logo" />
        <h1>
          Pomodoro
        </h1>
        <a
            className="App-link"
            href="https://github.com/Andres-Fernandez-Caballero/React-tutorial-pomodoro.git"
            target="_blank"
            rel="noopener noreferrer"
        >
          Git del Proyecto
        </a>
      </header>
  );
}

export default Header;
