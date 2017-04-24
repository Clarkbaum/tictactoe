var prompt = require('prompt');

var properties = [
  {
    name: 'username', 
    validator: /^[a-zA-Z\s\-]+$/,
    warning: 'Username must be only letters, spaces, or dashes'
  },
  {
    name: 'password',
    hidden: true
  }
];

var board = [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']];

prompt.start();
console.log(printBoard(board))
console.log("choose a place to move");
prompt.get(properties, function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('  Username: ' + result.username);
  console.log('  Password: ' + result.password);
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