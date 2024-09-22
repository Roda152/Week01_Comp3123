exports.add = function(a, b) {
    return a + b;
  }
  
  exports.subtract = (a, b) =>{
      return a - b;
  }
  
  exports.multiply = (a, b) => {
      return a * b;
  }
  
  function divide(a, b) {
      return a / b;
  }
  
  module.exports = {
      ...exports,
      divide
  }