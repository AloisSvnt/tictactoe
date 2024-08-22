type SquareProps = {
  id: number;
  item: any;
  onClick: (index: number) => void;
};

const roundedCorner: { [key: number]: string }[] = [
  { 0: "rounded-tl-lg" },
  { 2: "rounded-tr-lg" },
  { 6: "rounded-bl-lg" },
  { 8: "rounded-br-lg" },
];

function Square({ id, item, onClick }: SquareProps) {
  const corner = roundedCorner.find((corner) => corner[id]);
  const roundedClassName = corner ? corner[id] : "";
  return (
    <button
      className={`cursor-pointer flex items-center justify-center border-solid border-2 border-black ${roundedClassName}`}
      onClick={() => onClick(id)}
    >
      {item}
    </button>
  );
}

export default Square;
