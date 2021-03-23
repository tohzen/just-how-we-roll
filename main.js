/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];


const D6Button = document.getElementById("d6-roll");
  D6Button.src = "images/start/d6.png"

  const D6Doubles = document.getElementById("double-d6-roll-1")
  D6Doubles.src = "images/start/d6.png"

  const D6Doubles2 = document.getElementById("double-d6-roll-2")
  D6Doubles2.src = "images/start/d6.png"

const D12Button = document.getElementById("d12-roll");
  D12Button.src = "images/start/d12.jpeg"

const D20Button = document.getElementById("d20-roll")
  D20Button.src = "images/start/d20.jpg"

const destroyAllHumans = document.getElementById("reset-button")


  const D6Median = document.getElementById("d6-rolls-median");
  const D6Mode = document.getElementById("d6-rolls-mode");
  const D6Mean = document.getElementById("d6-rolls-mean");

  const D6DoublesMedian =document.getElementById("double-d6-rolls-median");
  const D6DoublesMode =document.getElementById("double-d6-rolls-mode");
  const D6DoublesMean = document.getElementById("double-d6-rolls-mean");

  const D12Median = document.getElementById("d12-rolls-median");
  const D12Mode = document.getElementById("d12-rolls-mode");
  const D12Mean = document.getElementById("d12-rolls-mean");

  const D20Median = document.getElementById("d20-rolls-median");
  const D20Mode = document.getElementById("d20-rolls-mode");
  const D20Mean = document.getElementById("d20-rolls-mean");

/********************
 * HELPER FUNCTIONS *
********************/
const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  
  return result;
}

const sortByNumber = function(arr) {
const byNumber = function(item1, item2) {
  return item1 - item2;
}

return arr.slice().sort(byNumber);
}


const updateD6 = function() {
  const median = getMedian(sixes);
  const mode = getMode(sixes);
  const mean = getMean(sixes);

  D6Median.innerText = median;
  D6Mode.innerText = mode;
  D6Mean.innerText = mean;
  
}

const updateD6Doubles = function() {
  const median = getMedian(doubleSixes);
  const mode = getMode(doubleSixes);
  const mean = getMean(doubleSixes);twelves

  D6DoublesMedian.innerText = median;
  D6DoublesMode.innerText = mode;
  D6DoublesMean.innerText = mean;
  
}

const updateD12 = function() {
  const median = getMedian(twelves);
  const mode = getMode(twelves);
  const mean = getMean(twelves);

  D12Median.innerText = median;
  D12Mode.innerText = mode;
  D12Mean.innerText = mean;
  
}

const updateD20 = function() {
  const median = getMedian(twenties);
  const mode = getMode(twenties);
  const mean = getMean(twenties);

  D20Median.innerText = median;
  D20Mode.innerText = mode;
  D20Mean.innerText = mean;
}



/*******************
 * YOUR CODE BELOW *
 *******************/
  const D6Roll = function() {
    const rollme = getRandomNumber(6);
    sixes.push(rollme);
    updateD6();

    console.log(rollme)
    
  }
  D6Button.addEventListener('click',D6Roll);

  const D6DoubleRoll = function() {
    const rollMeOnce = getRandomNumber(6);
    const rollMeTwice = getRandomNumber(6);
    doubleSixes.push(rollMeOnce + rollMeTwice);
    const median = getMedian(doubleSixes);
    const mode = getMode(doubleSixes);
    const mean = getMean(doubleSixes);

    D6DoublesMedian.innerText = median;
    D6DoublesMode.innerText = mode;
    D6DoublesMean.innerText = mean;

    console.log(doubleSixes)
    
    
  }

  
  D6Doubles.addEventListener('click',D6DoubleRoll);
  D6Doubles2.addEventListener('click',D6DoubleRoll);


  const D12Roll = function() {
    const rollMeHarder = getRandomNumber(12);
    twelves.push(rollMeHarder);
    const median = getMedian(twelves);
    const mode = getMode(twelves);
    const mean = getMean(twelves);

    D12Median.innerText = median;
    D12Mode.innerText = mode;
    D12Mean.innerText = mean;

    console.log(twelves)
    
  }
  D12Button.addEventListener('click',D12Roll);

  const D20Roll = function() {
    const rollMeHarderDaddy = getRandomNumber(20);
    twenties.push(rollMeHarderDaddy);
    const median = getMedian(twenties);
    const mode = getMode(twenties);
    const mean = getMean(twenties);

    D20Median.innerText = median;
    D20Mode.innerText = mode;
    D20Mean.innerText = mean;

    console.log(twenties)
    
  }
  D20Button.addEventListener('click',D20Roll);


/*******************
 * EVENT LISTENERS *
 *******************/




/******************
 * RESET FUNCTION *
 ******************/
const timeToDie = function() {
 sixes = [];
 doubleSixes = [];
 twelves = [];
 twenties = [];
  // reset 6s
 updateD6();
 D6DoubleRoll();
 D12Roll();
 D20Roll();
 

  console.log("destroyed")
}
destroyAllHumans.addEventListener('click', timeToDie);


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/


/****************
 * MATH SECTION *
 ****************/
const getMean = function(rolls) {
  let sum = 0;
  for(const roll of rolls) {
    sum += roll;
  }
  return (sum / rolls.length).toFixed(2);
}

const getMode = function(rolls) {
  const counter = {};
  let mode = "NA"
  for(const roll of rolls) {
    if(roll in counter) {
      counter[roll]++;
    } else {
      counter[roll] = 1;
    }
    if(counter[mode] === undefined || counter[roll] > counter[mode] ) {
      mode = roll;
    }
  }
  return mode;
}


const getMedian = function(rolls) {
  const mid = Math.floor(rolls.length / 2),
    nums = [...rolls].sort((a, b) => a - b);
  return rolls.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
  