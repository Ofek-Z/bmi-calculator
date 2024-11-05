// app.js

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function displayResult(bmi) {
    const resultDiv = document.getElementById('result');
    let status = '';

    if (bmi < 18.5) {
        status = 'תת-משקל';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'משקל תקין';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'עודף משקל';
    } else {
        status = 'השמנת יתר';
    }

    resultDiv.innerHTML = `ה-BMI שלך הוא ${bmi.toFixed(2)}<br>סטטוס: ${status}`;
}

document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // verify 
    if (!weight || !height || height <= 0) {
        alert('אנא הכנס נתונים נכונים!');
        return;
    }

    // output
    const bmi = calculateBMI(weight, height);
    displayResult(bmi);
});
