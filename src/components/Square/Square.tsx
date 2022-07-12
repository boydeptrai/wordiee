import React, { useEffect, useState } from "react";
import "./Square.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { rootState } from "../interface";

interface IProps {
  val: string;
  squareIndex: number;
}
const Square: React.FC<IProps> = (props) => {
  const { val, squareIndex } = props;
  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const position = useSelector((state: rootState) => state.board.pos);
  const reduxRow = useSelector((state: rootState) => state.board.row);

  const [correct, setCorrect] = useState(false);
  const [almost, setAlmost] = useState(false);
  const [wrong, setWrong] = useState(false);

  let wordLastIndex = 4;
  let currentPos =
    position === 5
      ? wordLastIndex
      : position > 5 && position % 5 === 0
      ? wordLastIndex
      : (position % 5) - 1;
  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
  };
  useEffect(() => {
    if (correctWord[currentPos] === val) {
      setCorrect(true);
    } else if (!correct && val !== "" && correctWord.includes(val)){
      setAlmost(true);
    } else if (!correct && val !== "" && correctWord.includes(val)) {
      setWrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setWrong(false);
    }

  },[val]);
  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants}>
      <div className="square">{val}</div>
    </motion.div>
  );
};

export default Square;
