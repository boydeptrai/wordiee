import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { desPos, incRow, setBoard } from "../../redux/boardSlice";
import { rootState } from "../interface";
import Key from "../Key/Key";
import "./KeyBoard.css";

const KeyBoard: React.FC = () => {
  const position = useSelector((state: rootState) => state.board.pos);
  const board = useSelector((state: rootState) => state.board.board);
  const dispatch = useDispatch();
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];

  const clickBack = () => {
    if (position <= 0) return;
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(desPos());
    dispatch(setBoard(newBoard));
  };
  const clickEnter = () =>{
    if (position % 5 ===0 && position !== 0) {
      dispatch(incRow())
    }
  }
  return (
    <div className="keyboard-container">
      {rows.map((row, idx) => {
        return (
          <div className="row">
            {idx === 2 && <span className="letter-row" onClick = {clickEnter}>Enter</span>}
            {row.split(" ").map((letter, idx) => {
              return (
                <div className="letter-row">
                  <Key letter={letter.toUpperCase()} />
                  {letter === "m" && <span onClick={clickBack}>Back</span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default KeyBoard;
