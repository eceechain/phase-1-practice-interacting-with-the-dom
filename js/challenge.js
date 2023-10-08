// Get the counter element
const counterElement = document.getElementById('counter');

// Function to increment the counter every second
function incrementCounter() {
  let count = parseInt(counterElement.textContent);
  count++;
  counterElement.textContent = count;
}

// Call the incrementCounter function every second
setInterval(incrementCounter, 1000);


// Get the plus and minus buttons
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

// Add click event listeners to the plus and minus buttons
plusButton.addEventListener('click', () => {
  let count = parseInt(counterElement.textContent);
  count++;
  counterElement.textContent = count;
});

minusButton.addEventListener('click', () => {
  let count = parseInt(counterElement.textContent);
  count--;
  counterElement.textContent = count;
});


