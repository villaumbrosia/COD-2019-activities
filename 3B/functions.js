//Copy and paste these functions into the JavaScript tab in JSBin

function add(num1, num2) {
  return num1 + num2;
}

function sayHi(name) {
  return "Hi " + name + "! How are you?";
}

function getAverage(...nums) {
  var denominator = nums.length;
  return nums.reduce(function(sum, number) {
    return sum + number;
  })/denominator;
}