document.getElementById('convertBtn').addEventListener('click', function() {
  const temp = parseFloat(document.getElementById('temperature').value);
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const resultBox = document.getElementById('result');

  if (isNaN(temp)) {
    resultBox.textContent = 'Please enter a valid number!';
    resultBox.style.color = 'red';
    return;
  }

  let result;

  // Celsius conversions
  if (from === "Celsius" && to === "Fahrenheit") result = (temp * 9/5) + 32;
  else if (from === "Celsius" && to === "Kelvin") result = temp + 273.15;

  // Fahrenheit conversions
  else if (from === "Fahrenheit" && to === "Celsius") result = (temp - 32) * 5/9;
  else if (from === "Fahrenheit" && to === "Kelvin") result = (temp - 32) * 5/9 + 273.15;

  // Kelvin conversions
  else if (from === "Kelvin" && to === "Celsius") result = temp - 273.15;
  else if (from === "Kelvin" && to === "Fahrenheit") result = (temp - 273.15) * 9/5 + 32;

  else result = temp; // Same unit

  resultBox.style.color = "#333";
  resultBox.textContent = `🌡️ ${temp}° ${from} = ${result.toFixed(2)}° ${to}`;
});
