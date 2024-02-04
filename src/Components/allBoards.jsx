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
        <img src="/image/icon-dark-theme.svg" alt="" />
        <input type="checkbox" />
        {/* dark icon */}
        <img src="/image/icon-light-theme.svg" alt="" />
      </div>
      <div>
        <button>Hide Selector</button>
      </div>
    </nav>
  );
};

export default AllBoards;
