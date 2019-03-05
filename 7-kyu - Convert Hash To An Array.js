function convertHashToArray(hash){
  var output = [];
  for (var key in hash) {
    var keyValuePair = []
    keyValuePair.push(key, hash[key]);
    output.push(keyValuePair);
    }
    return output.sort();
}