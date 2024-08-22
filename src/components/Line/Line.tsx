function Line({ a, b, c }: { a: number; b: number; c: number }) {
  const horizontalLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const verticalLine = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  const diagonalLine = [
    [0, 4, 8],
    [2, 4, 6],
  ];
  let lineComponent = <></>;
  let position = null;

  if (
    horizontalLine.some(
      (line) => line.includes(a) && line.includes(b) && line.includes(c)
    )
  ) {
    a === 0
      ? (position = "44px")
      : a === 3
      ? (position = "calc(50% - 4px)")
      : (position = "calc(100% - 52px)");
    lineComponent = (
      <div
        className="absolute w-11/12 h-2 rounded-full bg-primary"
        style={{ top: position, left: "50%", transform: "translateX(-50%)" }}
      ></div>
    );
  }

  if (
    verticalLine.some(
      (line) => line.includes(a) && line.includes(b) && line.includes(c)
    )
  ) {
    a === 0
      ? (position = "44px")
      : a === 1
      ? (position = "calc(50% - 4px)")
      : (position = "calc(100% - 52px)");
    lineComponent = (
      <div
        className="absolute w-2 h-5/6 rounded-full bg-primary"
        style={{ left: position, top: "50%", transform: "translateY(-50%)" }}
      ></div>
    );
  }

  if (
    diagonalLine.some(
      (line) => line.includes(a) && line.includes(b) && line.includes(c)
    )
  ) {
    a === 0 ? (position = "45deg") : (position = "-45deg");
    lineComponent = (
      <div
        className="absolute w-full h-2 rounded-full bg-primary"
        style={{ top: "calc(50% - 4px)", rotate: position }}
      ></div>
    );
  }

  return lineComponent;
}

export default Line;
