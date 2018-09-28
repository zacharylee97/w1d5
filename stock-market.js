var input = [45, 24, 35, 31, 40, 38, 11];

//Brute force solution: Check every possibility
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

//Elegant solution: Only iterate through the array once
function elegantMaxProfit(arr) {
  var maxProfit = 0;
  var minBuy = arr[0];
  arr.forEach(function(element) {
    if (element < minBuy) {
      minBuy = element;
    }
    profit = element - minBuy;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  });
  return maxProfit;
}

console.log(elegantMaxProfit(input));