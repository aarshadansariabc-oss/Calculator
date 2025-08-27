let display = document.getElementById("display");

// function to add key values to the display
function skey(value) {
  display.value += value;
}

// function to clear the display
function clearDisplay() {
  display.value = "";
}

// function to delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// function to evaluate expression
function calculate() {
  try {
    display.value = eval(display.value); // eval safely handles arithmetic
  } catch (error) {
    display.value = "Error"; // in case of invalid input
  }
}
