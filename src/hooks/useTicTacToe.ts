import { useState } from "react";
import { calculateWinner } from "../utils/tictactoe";

export function useTicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number) => {
    const newSquares = squares.slice();
    if (newSquares[index] !== null || winner) {
      return;
    }

    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    }else {
      setIsXNext(!isXNext);
    }
  };

  return { squares, handleClick, isXNext, winner };
}