const chai = require("chai");
const expect = chai.expect;
const Task = require("../task2");
const Task1 = require("../task1");

// Calculator  arithmetic tests
describe("Task Test cases", () => {
  describe("3,5 multiples", () => {
    it("sum Of Numbers", () => {
      expect(Task1.sumOfNumbers()).to.equal(233168);
    });
  });
  describe("Fibonacci sum", () => {
    it("Fibonacci sum", () => {
      expect(Task.FibonacciSum()).to.equal(4613732);
    });
  });
});
