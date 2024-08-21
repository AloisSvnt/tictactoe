import { ReactElement, useState } from "react";

type SquareProps = {
  id: number;
  item: any;
  onClick: (index: number) => void;
};

function Square({ id, item, onClick }: SquareProps) {
  return (
    <button
      className="cursor-pointer text-6xl flex items-center justify-center border-solid border-2 border-black"
      onClick={() => onClick(id)}
    >
      {item}
    </button>
  );
}

export default Square;
