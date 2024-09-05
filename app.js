/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display')



/*-------------------------------- Variables --------------------------------*/
let nums = []
let displayNum = ""
let savedNum = 0
let operator = ""
let solution =  ""
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//       console.log(event.target.innerText);
//       // Future logic to capture the button's value would go here...
//     });
//   });

  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
  
    // Example
    if (event.target.classList.contains('number')) {
      // Do something with a number
      nums.push(event.target.innerText)
      console.log(nums)
      nums.forEach((num) => {displayNum += num}) //since we are saving the numbers as strings, this is just appending number strings to each other i.e. "1" + "2" = 12
      nums = [] //clears array (might be a better way to work this?)
      display.innerText = displayNum
    }
  
    // Example
    if (event.target.classList.contains('operator')) {
      // Do something with this operator
    //   console.log("ya clicked me")
      operator = event.target.innerText
      display.innertext = ""
      console.log(operator)
      savedNum = Number(displayNum) //converts the display to a saved number that is a number.
      console.log(savedNum)
      displayNum = ""
    } 
    if (event.target.innerText === '=') {
        if (operator === '*'){
            solution = savedNum * Number(displayNum)
            display.innerText = solution
        }
        if (operator === '-'){
            solution = savedNum - Number(displayNum)
            display.innerText = solution
        }
        if (operator === '+'){
            solution = savedNum + Number(displayNum)
            display.innerText = solution
        }
        if (operator === '/'){
            solution = savedNum / Number(displayNum)
            display.innerText = solution
        }
        nums = []
        displayNum = solution //this allows for repeat operations
        operator = "" //clear the operator so = doesn't do same operation twice.
    }
    if (operator === "C"){
        //I dunno dude just clear all the variables
        nums = []
        operator = ""
        displayNum = ""
        savedNum = 0
        solution = 0
        display.innerText = solution
    }


  });
/*-------------------------------- Functions --------------------------------*/
