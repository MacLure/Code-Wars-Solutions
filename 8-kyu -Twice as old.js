function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld === sonYearsOld * 2) {
    return 0;
  } else if (dadYearsOld >= sonYearsOld * 2) {
    for (i = 0 ; i < dadYearsOld ; i++) {
      dadYearsOld ++;
      sonYearsOld ++;
      if (dadYearsOld === sonYearsOld * 2) {
        return i + 1;
      }
    }
  } else {
    for (i = 0 ; i < dadYearsOld  ; i++) {
      dadYearsOld --;
      sonYearsOld --;
      if (dadYearsOld === sonYearsOld * 2) {
        return i + 1;
      }
    }
  }
}