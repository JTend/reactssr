const winner = board => {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]
  ];
  for(let win of wins)
    if(board[win[0]] && board[win[0]] === board[win[1]] && board[win[1]] === board[win[2]]) return board[win[0]];
  return null;
}

export default winner;