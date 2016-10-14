// const readline = require('readline');
// const reader = readline.createInterface({
//   // it's okay if this part is magic; it just says that we want to
//   // 1. output the prompt to the standard output (console)
//   // 2. read input from the standard input (again, console)
//
//   input: process.stdin,
//   output: process.stdout
// });



class Hanoi {
  constructor() {
    this.towers = [[3,2,1],[],[]];
  }

  prompt(cb, cb2, cb3) {
    // console.log(this);
    let startTowerIdx, endTowerIdx;
    // let that = this;
    // console.log(`that is ${that}`);
    cb2.question("Enter the start tower index: ", idx => {
      startTowerIdx = idx - 1;
      cb2.question("Enter the end tower index: ", idx2 => {
        endTowerIdx = idx2 -1;
        cb.call(this, startTowerIdx, endTowerIdx);
        if (this.isWon() === false) {
          this.run(cb2);
        }else{
          this.render();
          console.log("You win!");
          cb2.close();
        }
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    let start_length = this.towers[startTowerIdx].length;
    let end_length = this.towers[endTowerIdx].length;

    if (start_length <= 0) {
      console.log(`Invalid Move!  Starting Tower is empty!`);
      return false;
    }else if (end_length <= 0) {
      return true;
    }else{
      let last_start_disc = this.towers[startTowerIdx][start_length -1];
      let last_end_disc = this.towers[endTowerIdx][end_length -1];

      if ( last_start_disc > last_end_disc) {
        return false;
      }else{
        return true;
      }
    }
  }

  move (startTowerIdx, endTowerIdx) {
    // console.log(this);
    console.log(this.isValidMove(startTowerIdx, endTowerIdx));
    if (this.isValidMove(startTowerIdx, endTowerIdx) === true) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
      return true;
    }else{
      return false;
    }
  }

  render () {
    process.stdout.write('\x1B[2J\x1B[0f');
    for (var i = 0; i < this.towers.length; i++) {
      console.log(`Tower ${i+1}: ${this.towers[i]}`);
    }
  }
  // console.log(JSON.stringify(this.towers));

  isWon () {
    if (this.towers[0].length === 0){
      if (this.towers[1].length === 3){
        return true;
      } else if (this.towers[2].length === 3){
        return true;
      } else {
        return false;
      }
    }else{
      return false;
    }
  }

  run (cb) {
    this.render();
    this.prompt(this.move, cb);
  }
}

module.exports = Hanoi;
