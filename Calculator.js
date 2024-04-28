let string = ""; // Initialize an empty string to store the input expression
let buttons = document.querySelectorAll('.button'); // Select all elements with class 'button'
Array.from(buttons).forEach((button) => { // Iterate over each button
    button.addEventListener('click', (e) => { // Add click event listener to each button
        if (e.target.innerHTML == '=') { // If the clicked button is '=', calculate the expression
            string = eval(string); // Evaluate the expression stored in 'string'
            document.querySelector('input').value = string; // Display the result in the input field
        } else if (e.target.innerHTML == 'C') { // If the clicked button is 'C', clear the input
            string = ""; // Reset the 'string' variable
            document.querySelector('input').value = string; // Clear the input field
        } else { // For other buttons (digits and operators)
            console.log(e.target); // Log the clicked button (for debugging)
            string = string + e.target.innerHTML; // Append the clicked button's value to 'string'
            document.querySelector('input').value = string; // Display the updated expression in the input field
        }
    });
});
//Todo: Make M+ M- and C functional//
