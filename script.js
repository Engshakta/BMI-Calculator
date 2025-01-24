
// JavaScript to handle form submission and BMI calculation
const form = document.getElementById('bmiForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form input values
    const height = parseFloat(form.height.value);
    const weight = parseFloat(form.weight.value);

    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine category based on BMI
    const category = getBMICategory(bmi);

    // Display weight and category in the result section
    resultDiv.innerHTML = `
    <h1>Result</h1>
    <p>BMI: ${bmi.toFixed(2)}</p>
        <p>Category: ${category}</p>
    `;

    // Show the result section
    resultDiv.style.display = 'block';
    form.style.display = 'none';

    // Clear input fields
    form.reset();
});

// Function to categorize BMI
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}
