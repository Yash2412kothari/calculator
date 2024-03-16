document.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById("display");
  const keys = document.querySelector(".keys");
  let currentInput = '';

  keys.addEventListener("click", function(e) {
    if (e.target.matches("button")) {
      const key = e.target;
      const keyValue = key.textContent;
      
      if (key.id === 'clear') {
        currentInput = '';
        display.value = '';
      } else if (key.id === 'toggleSign') {
        currentInput = eval(currentInput) * -1;
        display.value = currentInput;
      } else if (key.id === 'percent') {
        currentInput = eval(currentInput) / 100;
        display.value = currentInput;
      } else if (key.id === 'equals') {
        try {
          display.value = eval(currentInput);
        } catch (error) {
          display.value = 'Error';
        }
      } else if (key.id === 'pi') {
        currentInput += Math.PI;
        display.value = currentInput;
      } else if (key.id === 'sin') {
        currentInput += 'Math.sin(';
        display.value = currentInput;
      } else if (key.id === 'cos') {
        currentInput += 'Math.cos(';
        display.value = currentInput;
      } else if (key.id === 'tan') {
        currentInput += 'Math.tan(';
        display.value = currentInput;
      } else if (key.id === 'power') {
        currentInput += '**';
        display.value = currentInput;
      } else if (key.id === 'log') {
        currentInput += 'Math.log(';
        display.value = currentInput;
      } else {
        currentInput += keyValue;
        display.value = currentInput;
      }
    }
  });
});
