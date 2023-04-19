function convert() {
    // Get the input value and selected unit
    var tempInput = document.getElementById("temp-input");
    var temp = parseFloat(tempInput.value);
    var unit = document.querySelector('input[name="unit"]:checked').value;

    // Validate the input
    if (isNaN(temp)) {
        alert("Please enter a valid number for the temperature.");
        tempInput.value = "";
        return;
    }

    // Convert the temperature to the other unit
    if (unit === "celsius") {
        var result = (temp * 9/5) + 32;
        var resultUnit = "Fahrenheit";
    } else {
        var result = (temp - 32) * 5/9;
        var resultUnit = "Celsius";
    }

    // Display the result
    document.getElementById("result").innerHTML = temp + " " + unit + " is " + result.toFixed(2) + " " + resultUnit;
}