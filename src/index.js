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
console.log("choose a place to move");
prompt.get(properties, function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('  Location: ' + result.location);
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