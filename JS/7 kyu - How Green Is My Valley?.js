function makeValley(arr) {
    let output = [];
    arr = arr.sort((a, b) => a-b);
    
    if (arr.length % 2=== 0)
    {
      for (let i = arr.length - 1; i >= 0; i -= 2)
        output.push(arr[i]);
      for (let i = 0; i < arr.length; i += 2)
        output.push(arr[i]);
      return output;
    } else {
      let bottom = arr[0];
      for (let i = arr.length - 1; i >= 1; i -= 2)
        output.push(arr[i]);
        output.push(bottom);
      for (let i = 1; i < arr.length; i += 2)
        output.push(arr[i]);
      return output;
    }
}