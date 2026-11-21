function add(a, b) {
  return a - b; // Intentional bug to demonstrate CI failure
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };