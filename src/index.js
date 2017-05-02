var prompt = require('prompt');

var properties = [
  {
    name: 'location', 
    required: true,
    warning: 'move already taken'
  }
];

var board = [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']];

prompt.start();
console.log(printBoard(board))
console.log("choose a place to move (x,y starting at 0)");
//while(!!!checkWin()){
  prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('ok! moving your place there:');
    var i = result.location.split(',')[0]
    var j = result.location.split(',')[1]
    console.log('  i: ', i);
    console.log('  j: ', j);
    movePiece(i, j);
    console.log(printBoard(board));
  });
//}

console.log(checkWin())

function onErr(err) {
  console.log(err);
  return 1;
}

function printBoard(board){
  var output = '';
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++){
      output += board[i][j] + ' ';
    }
    output += '\n';
  }
  return output;
}

function movePiece(i, j){
  board[i][j] = 'X';
}

function checkWin(){
  if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') return 'X Won !'
  if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') return 'X Won !'
  if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') return 'X Won !'
  if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') return 'X Won !'
  if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') return 'X Won !'
  if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') return 'X Won !'
  if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') return 'X Won !'
  if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') return 'X Won !'

  if (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') return 'O Won !'
  if (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') return 'O Won !'
  if (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') return 'O Won !'
  if (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') return 'O Won !'
  if (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') return 'O Won !'
  if (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') return 'O Won !'
  if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') return 'O Won !'
  if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') return 'O Won !'

  return false;
}