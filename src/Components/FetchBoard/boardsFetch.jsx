import React, { useState, useEffect } from "react";
import "../../styles/displayBoard.css";

const BoardsFetch = () => {
  const [boards, setBoards] = useState({});
  const [Error, setErrorMSG] = useState([]);

  const fetchBoards = async () => {
    try {
      const res = await fetch("http://localhost:8080/boards-kanban");
      if (!res.ok) {
        throw new Error("This is a bad return on data");
      }
      const beutifyData = await res.json();
      beutifyData.boards.map((section, index) => {
        return setBoards(section.boards);
      });
    } catch (error) {
      setErrorMSG(error);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <div className="board-container">
      <div className="board-todo">Todo</div>
      <div className="board-doing">Doing</div>
      <div className="board-done">Done</div>
    </div>
  );
};

export default BoardsFetch;
