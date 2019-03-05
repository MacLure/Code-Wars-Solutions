function findOutlier(integers){
  let evenInt = integers.filter((i) => i % 2 === 0);
  let oddInt = integers.filter((i) => i % 2 !== 0);
  return (evenInt.length === 1) ? Number(evenInt) : Number(oddInt);
}