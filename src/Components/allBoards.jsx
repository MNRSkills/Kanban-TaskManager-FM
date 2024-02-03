import React from "react";
import "../styles/navbar.css";

const AllBoards = () => {
  return (
    <nav className="navbar-side">
      <img src="/image/logo-light.svg" alt="logo" />
      <ul className="sidebar-nav">
        <li>Platform Launch</li>
        <li>Marketing Plan</li>
        <li>Roadmap</li>
        <li>Create New Board</li>
      </ul>
      <div className="bottom-selectors">
        {/* ligh icon */}
        <input type="checkbox" />
        {/* dark icon */}

        <button>Hide Selector</button>
      </div>
    </nav>
  );
};

export default AllBoards;
