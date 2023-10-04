// Access the display element and initialize expression
let display = document.getElementById('display');
let expression = '';

// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key === 'Enter') {
    event.preventDefault();
    calculate(); // Trigger calculation on Enter
  } else if (key === 'Backspace') {
    event.preventDefault();
    deleteChar(); // Trigger character deletion on Backspace
  } else if (key.match(/[0-9.\/\*\-\+]/)) {
    event.preventDefault();
    appendChar(key); // Append valid characters to the expression
  }
});

// Function to append a character to the expression and update the display
function appendChar(char) {
  expression += char;
  display.value = expression;
}

// Function to clear the display and reset the expression
function clearDisplay() {
  expression = '';
  display.value = '';
}

// Function to delete the last character from the expression and update the display
function deleteChar() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

// Function to evaluate the expression and display the result
function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
}

// Function to handle raising to a power
function calculatePower() {
  expression += '**';
  display.value = expression;
}

// Function to handle square root calculation
function calculateSquareRoot() {
  expression += 'Math.sqrt(';
  display.value = expression;
}


// Function to handle the blinking effect on the display
function startBlinking() {
  display.classList.add('blink');
}

function stopBlinking() {
  display.classList.remove('blink');
}


// Modify the calculate function to start blinking on calculation
function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = result.toString();
    startBlinking(); // Start blinking after calculation
  } catch (error) {
    display.value = 'Error';
  }
}

// Modify the deleteChar function to stop blinking after deleting a character
function deleteChar() {
  expression = expression.slice(0, -1);
  display.value = expression;
  stopBlinking(); // Stop blinking after deleting a character
}
