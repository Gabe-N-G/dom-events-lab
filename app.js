/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display')



/*-------------------------------- Variables --------------------------------*/
let nums = []
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
      display.innerText = event.target.innerText
      nums.push(event.target.innerText)
      console.log(nums) 
    }
  
    // Example
    if (event.target.classList.contains('operator')) {
      // Do something with this operator
      console.log("ya clicked me")
      operator = event.target.innerText
      display.innertext = ""
      console.log(operator)
    } 
    if (event.target.innerText === '=') {
        if (operator === '*'){
            solution = nums[0] * nums [1]
            display.innerText = solution
        }
        if (operator === '-'){
            solution = nums[0] - nums [1]
            display.innerText = solution
        }
        if (operator === '+'){
            solution = nums[0] + nums [1]
            display.innerText = solution
        }
        if (operator === '/'){
            solution = nums[0] / nums [1]
            display.innerText = solution
        }
        nums = []
        nums.push(solution)
    }
    if (operator === "C"){
        nums = []
        operator = ""
        solution = 0
        display.innerText = solution
    }


  });
/*-------------------------------- Functions --------------------------------*/
