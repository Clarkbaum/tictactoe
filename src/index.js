var prompt = require('prompt');

var properties = [
  {
    name: 'location', 
    warning: 'move already taken'
  }
];

var board = [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']];

prompt.start();
console.log(printBoard(board))
console.log("choose a place to move (x,y)");
prompt.get(properties, function (err, result) {
  if (err) { return onErr(err); }
  console.log('ok! moving your place there:');
  var i = result.location.split(',')[0]
  var j = result.location.split(',')[1]
  console.log('  Location: ' + result.location);
  console.log('  i: ', i);
  console.log('  j: ', j);
  movePiece(i, j);
  console.log(printBoard(board));
});

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