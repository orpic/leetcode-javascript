function coinChange(coins, amount) {
  let dpMinCoins = new Array(amount + 1).fill(Infinity);

  dpMinCoins[0] = 0;

  for (let i = 0; i < dpMinCoins.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coinValue = coins[j];
      if (coinValue <= i) {
        dpMinCoins[i] = Math.min(dpMinCoins[i - coinValue] + 1, dpMinCoins[i]);
      }
    }
  }

  const answer = dpMinCoins[dpMinCoins.length - 1];

  return answer === Infinity ? -1 : answer;
}

module.exports = coinChange;

//  // greedy does not work

//  let total = amount;
//  let numberOfCoins = 0;
//  coins.sort((a, b) => b - a);
//  console.log(coins);

//  if (amount === 0) return 0;

//  for (let i = 0; i < coins.length; i++) {
//    const nOfCoin = Math.floor(total / coins[i]);
//    total = total - nOfCoin * coins[i];

//    numberOfCoins += nOfCoin;
//  }

//  if (total === 0) return numberOfCoins;
//  if (total > 0) return -1;

//  //   return -1;
