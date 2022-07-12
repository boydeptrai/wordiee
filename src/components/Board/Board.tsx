import React from "react";
import KeyBoard from "../Keyboard/KeyBoard";
import Square from "../Square/Square";
import "./Board.css";

interface IProps {
  board: string[];
}

const Board: React.FC<IProps> = (props) => {
  const { board } = props;
  return (
    <>
      <div className="board">
        {board.map((square, idx) => {
          return (
              <div key={idx}>
              <Square val={square} squareIndex={idx} />
              </div>
          )
        })}
      </div>
      <div className="keyboard"  >
          <KeyBoard />
      </div>
    </>
  );
};

export default Board;