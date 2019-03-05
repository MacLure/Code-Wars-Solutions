function well(x){

  let allKatas = x.join(',').toUpperCase().split(',').sort().reverse().toString();
  let good = (/good/ig)

  if (allKatas.match(good) === null ) { return 'Fail!' }
  if (allKatas.match(good).length > 2 ) { return 'I smell a series!' }
  if (allKatas.match(good).length > 0 ) { return 'Publish!' }
  
}