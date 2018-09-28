// For every two empty bottles, you can get one free full bottle of pop
// For every four bottle caps, you can get one free full bottle of pop
// Each bottle of pop costs $2 to purchase

var money = process.argv[2];

function poppinBottles(money) {
  var totalRedeemed = parseInt(money/2);
  var bottlesOfPop = totalRedeemed;
  var emptyBottles = 0;
  var caps = 0;

  do {
    //All bottles of pop become empty bottles and caps
    emptyBottles += bottlesOfPop;
    caps += bottlesOfPop;
    bottlesOfPop = 0;

    //Trade empty bottles
    if (emptyBottles >= 2) {
      var redeemed = Math.floor(emptyBottles / 2);
      emptyBottles -= redeemed * 2;
      bottlesOfPop += redeemed;
      totalRedeemed += redeemed;
      }

    //Trade caps
    if (caps >= 4) {
      var redeemed = Math.floor(caps / 4);
      caps -= redeemed * 4;
      bottlesOfPop += redeemed;
      totalRedeemed += redeemed;
    }
  }
  while (bottlesOfPop > 0);
  return totalRedeemed;
}

console.log(poppinBottles(money));