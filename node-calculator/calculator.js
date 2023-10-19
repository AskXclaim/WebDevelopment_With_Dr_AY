function calculate(body) {
  try {
    const num1 = Number(body.num1);
    const num2 = Number(body.num2);
    return num1 + num2;
  } catch (error) {
    throw "The following error occurred:" + error;
  }
}

function calculateBmi(body) {
  try {
    const weight = parseFloat(body.weight);
    const height = parseFloat(body.height);
    return weight / Math.pow(height, 2);
  } catch (error) {
    throw "The following error occurred:" + error;
  }
}
exports.calculate = calculate;
exports.calculateBmi = calculateBmi;
