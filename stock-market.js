var input = [45, 24, 35, 31, 40, 38, 11];

function maxProfit(arr) {
  var result = -1
  for (var i = 0; i < input.length; i++) {
    var start = input[i];
    for (var j = i + 1; j < input.length; j++) {
      var sell = input[j];
      var profit = sell - start;
      if (profit > 0 && profit > result) {
        result = profit;
      }
    }
  }
  return result;
}

console.log(maxProfit(input));