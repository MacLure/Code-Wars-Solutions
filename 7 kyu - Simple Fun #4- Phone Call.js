function phoneCall(min1, min2_10, min11, s) {

  let moneyLeft = s;
  let minutesSpent = 0;
  
  if (moneyLeft >= min1 && minutesSpent < 1) { 
    minutesSpent ++;
    moneyLeft -= min1;
  }

  while (moneyLeft >= min2_10 && minutesSpent >= 1 && minutesSpent < 10) {
    minutesSpent ++;
    moneyLeft -= min2_10;
  }
  
  while (moneyLeft >= min11 && minutesSpent >= 10) {
    minutesSpent ++;
    moneyLeft -= min11;
  }

  return minutesSpent;  
}

