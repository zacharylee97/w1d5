var assert = require("chai").assert;
var luhnCheck = require("./luhn-check");


describe("Luhn Check", function(){
  it("should return true if the number is valid", function() {
    var number = 79927398713;
    var result = luhnCheck(number);
    assert.isTrue(result);
  });

  it("should return false if the number is not valid", function() {
    var number = 79927398710;
    var result = luhnCheck(number);
    assert.isFalse(result);
  });

  it("should return true if result is a function", function() {
    var value = "not a number";
    var result = luhnCheck(value);
    assert.isFalse(result);
  });
});