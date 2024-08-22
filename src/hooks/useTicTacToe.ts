import { useState } from "react";
import { calculateWinner, calculateDrawMatch, enjoyWin } from "../utils/tictactoe";

export function useTicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<Object | null>(null);

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  }

  const handleClick = (index: number) => {
    const newSquares = squares.slice();
    if (newSquares[index] !== null || winner) {
      return;
    }

    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newSquares);
    if(!gameWinner){
      setIsXNext(!isXNext);
    }
    if (gameWinner) {
      setWinner(gameWinner);
    }
    if (calculateDrawMatch(newSquares)) {
      setWinner("Draw");
    };

  }
  return { squares, handleClick, isXNext, winner, resetBoard, enjoyWin };
}