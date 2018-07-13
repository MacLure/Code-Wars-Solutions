var bananaCount = function(num){
  var result = ""
  for(i=num; i>=1; i--){
  if (i>1) {
    result += "I have " + i + " bananas... ";
  }
    else   {
      result += "I have " + i + " banana... ";
    }
    }
  return result;
}