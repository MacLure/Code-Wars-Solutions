function discoverOriginalPrice(discountedPrice, salePercentage){
  return  Number((discountedPrice / (1 - salePercentage * 0.01)).toFixed(2));  
}