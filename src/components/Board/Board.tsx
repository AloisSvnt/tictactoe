import Square from "../Square/Square";
import { useTicTacToe } from "../../hooks/useTicTacToe";
import Line from "../Line/Line";

function Board() {
  const enjoyWinElement = document.querySelector("#winnerSlot") as HTMLElement;
  const { squares, handleClick, isXNext, winner, resetBoard, enjoyWin } =
    useTicTacToe();

  let status;
  if (winner && winner !== "Draw") {
    const winnerObj = winner as { winner: string; line: string };
    status = `Winner : ${winnerObj.winner}`;
  }
  winner === "Draw" ? (status = `Draw Match`) : null;
  if (!winner) {
    status = (
      <div>
        Next player :{" "}
        {isXNext ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-regular fa-circle"></i>
        )}
      </div>
    );
  }

  const winnerClass =
    winner === "Draw"
      ? "bg-accent"
      : winner && winner !== "Draw"
      ? "bg-primary"
      : "bg-secondary";

  return (
    <>
      <div
        id="winnerSlot"
        className={`p-2 w-1/2 m-auto text-center rounded-md ${winnerClass}`}
      >
        {status}
        {winner && winner !== "Draw" && enjoyWinElement
          ? (enjoyWin(enjoyWinElement), null)
          : null}
      </div>
      <div className="grid grid-rows-3 grid-cols-3 w-72 h-72 relative">
        {squares.map((item, index) => (
          <Square
            id={index}
            key={index}
            item={
              item === "X" ? (
                <i className="fa-solid fa-xmark"></i>
              ) : item === "O" ? (
                <i className="fa-regular fa-circle"></i>
              ) : null
            }
            onClick={() => handleClick(index)}
          />
        ))}
        {winner && typeof winner !== "string" ? (
          <Line
            a={(winner as { line: number[] }).line[0]}
            b={(winner as { line: number[] }).line[1]}
            c={(winner as { line: number[] }).line[2]}
          />
        ) : null}
      </div>
      <button
        className="btn btn-neutral w-1/2 m-auto shadow-md"
        onClick={resetBoard}
      >
        Reset
      </button>
    </>
  );
}

export default Board;
