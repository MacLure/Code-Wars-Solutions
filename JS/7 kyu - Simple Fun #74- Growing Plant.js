function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let currentHeight = upSpeed;
    let days = 1;
    while (currentHeight < desiredHeight) {
        currentHeight -= (downSpeed);
        days ++;
        currentHeight += (upSpeed);
    }
    return days;
}