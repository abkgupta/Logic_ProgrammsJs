var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    let pow = 1;
    let absN = Math.abs(n);

  while (absN > 0) {
    if (absN % 2 === 1) {
      pow *= x;
    }
    x *= x;
    absN = Math.floor(absN / 2);
  }
  return n < 0 ? (1 / pow).toFixed(5) : pow.toFixed(5);
};