// For every two empty bottles, you can get one free full bottle of pop
// For every four bottle caps, you can get one free full bottle of pop
// Each bottle of pop costs $2 to purchase

var money = process.argv[2];

function poppinBottles(money) {
  var totalRedeemed = parseInt(money/2);
  var totalEarnedThroughBottles = 0;
  var totalEarnedThroughCaps = 0;

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
      totalEarnedThroughBottles += redeemed;
      }

    //Trade caps
    if (caps >= 4) {
      var redeemed = Math.floor(caps / 4);
      caps -= redeemed * 4;
      bottlesOfPop += redeemed;
      totalRedeemed += redeemed;
      totalEarnedThroughCaps += redeemed;
    }
  }
  while (bottlesOfPop > 0);

  var output = "Total Bottles: " + totalRedeemed + "\n";
  output += "Remaining Bottles: " + emptyBottles + "\n";
  output += "Remaining Caps: " + caps + "\n";
  output += "Total Earned: \n";
  output += "  Bottles: " + totalEarnedThroughBottles + "\n";
  output += "  Caps: " + totalEarnedThroughCaps;
  return output;
}

console.log(poppinBottles(money));