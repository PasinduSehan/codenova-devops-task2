function add(a, b) {
  return a - b; // Intentional bug
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };