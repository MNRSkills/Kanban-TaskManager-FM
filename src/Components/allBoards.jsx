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
      <div>
        {/* ligh icon */}
        <input type="checkbox" />
        {/* dark icon */}
      </div>
    </nav>
  );
};

export default AllBoards;
