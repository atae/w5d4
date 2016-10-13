const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  // console.log('In Greater Than!');
  reader.question(`Is ${el1} greater than ${el2} \n`, function(answer) {
    if (answer === "yes"){
      callback(true);
    } else if (answer === "no") {
      callback(false);
    } else {
      if(Math.round(Math.random()) === 1){
        callback(true);
      } else {
        callback(false);
      }
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // console.log('In Inner Bubble!');
  if (i < arr.length-1) {
    askIfGreaterThan(arr[i], arr[i+1], isGreaterThan => {
      if (isGreaterThan === true) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
      } else {
        madeAnySwaps = false;
      }
      i++;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    })
  }else if (i == (arr.length -1)){
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {

  function outerBubbleSortLoop(madeAnySwaps) {
    // console.log('In Outer Bubble!');
    if (madeAnySwaps === true){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }else{
      sortCompletionCallback(arr)
    }
  }

  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
// // absurd = new absurdBubbleSort();
// // console.log(absurd);
// askIfGreaterThan(1, 2, function (input) {
//   if (input === true){
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// });
