function verifyWinner(boardState: Array<string | null>): boolean {
  if (
    boardState[0] === boardState[1] &&
    boardState[1] === boardState[2] &&
    boardState[2] !== null
  ) {
    return true;
  } else if (
    boardState[3] === boardState[4] &&
    boardState[4] === boardState[5] &&
    boardState[5] !== null
  ) {
    return true;
  } else if (
    boardState[6] === boardState[7] &&
    boardState[7] === boardState[8] &&
    boardState[8] !== null
  ) {
    return true;
  } else if (
    boardState[0] === boardState[3] &&
    boardState[3] === boardState[6] &&
    boardState[6] !== null
  ) {
    return true;
  } else if (
    boardState[1] === boardState[4] &&
    boardState[4] === boardState[7] &&
    boardState[7] !== null
  ) {
    return true;
  } else if (
    boardState[2] === boardState[5] &&
    boardState[5] === boardState[8] &&
    boardState[8] !== null
  ) {
    return true;
  } else if (
    boardState[0] === boardState[4] &&
    boardState[4] === boardState[8] &&
    boardState[8] !== null
  ) {
    return true;
  } else if (
    boardState[2] === boardState[4] &&
    boardState[4] === boardState[6] &&
    boardState[6] !== null
  ) {
    return true;
  } else {
    return false;
  }
}

export default verifyWinner;
