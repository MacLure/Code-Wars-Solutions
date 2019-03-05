function getDivisorsCnt(n){
    let divisors = [];
    for (i = 0 ; i <= n ; i ++) {
      if (n % i === 0) {
        divisors.push(i)
      }
    }
    return divisors.length;
}
