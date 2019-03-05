function cookingTime(eggs) {
  return (eggs === 0) ? 0 : (Math.ceil(eggs / 8) * 5);  
}