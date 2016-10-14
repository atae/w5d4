const readline = require('readline');
const Hanoi = require('./game.js');
//
const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function dummy (idx1, idx2) {
  console.log(`${idx1} ${idx2}`);
}


game = new Hanoi;


function play_again (cb){
  reader.question("Want to play again?", function (response) {
    if (response === 'yes'){
      cb.run(reader, play_again)
    }else{
      console.log(`Thanks for playing!`);
    }
  });
}

game.run(reader);

// reader.close();
