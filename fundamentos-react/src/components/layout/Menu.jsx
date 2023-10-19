import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // Importe esses arquivos

import Home from "../../views/examples/Home";
import About from "../../views/examples/About";

const Menu = (props) => (
  <aside>
    <nav>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li><Link to="/about"> About</Link></li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
