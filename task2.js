// Each new term in the Fibonacci sequence is generated by
//  adding the previous two terms. By starting with 1 and 2,
//  the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do
//  not exceed four million, find the sum of the even-valued terms.

const FibonacciSum = () => {
  var sum = 0,
    previousFirstTerm = 1,
    previousSecondTerm = 2,
    limit = 4000000,
    value = 0;

  while (value < limit) {
    if (previousSecondTerm % 2 == 0) {
      sum += previousSecondTerm;
    }
    value = previousFirstTerm + previousSecondTerm;
    previousFirstTerm = previousSecondTerm;
    previousSecondTerm = value;
  }
  return sum;
};

module.exports = {
  FibonacciSum,
};
