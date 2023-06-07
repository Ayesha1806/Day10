function addButton() {
    // Create the button element
    var button = document.createElement('button');
    button.textContent = 'Click Me';
  
    // Get the container div element
    var container = document.getElementById('container');
  
    // Append the button to the container
    container.appendChild(button);
  
    // Add event listener to the button
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
  }
  
  // Call the function to add the button
  addButton();
  