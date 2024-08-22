import party from "party-js";

export function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {winner:squares[a], line: [a, b, c]};
    }
  }
  return null;
}

export function enjoyWin(element: HTMLElement) {
  party.confetti(element, {
    count: party.variation.range(50, 100),
    size: party.variation.range(1, 2),
    color: party.variation.gradientSample(
      party.Gradient.simple(
        party.Color.fromHex("#2E282A"),
        party.Color.fromHex("#EF9995")
      )
    )
  });
}


export function calculateDrawMatch(squares: string[]): boolean {
  if (calculateWinner(squares)) {
    return false;
  }
  return squares.every((square) => square !== null);
}