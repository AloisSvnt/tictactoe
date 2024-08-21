import Square from "../Square/Square";
import { useTicTacToe } from "../../hooks/useTicTacToe";
function Board() {
  const { squares, handleClick, isXNext, winner } = useTicTacToe();

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = (
      <div>
        Next player:{" "}
        {isXNext ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-regular fa-circle"></i>
        )}
      </div>
    );
  }

  return (
    <>
      <div>{status}</div>
      <div className="grid grid-rows-3 grid-cols-3 w-72 h-72">
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
      </div>
    </>
  );
}

export default Board;
