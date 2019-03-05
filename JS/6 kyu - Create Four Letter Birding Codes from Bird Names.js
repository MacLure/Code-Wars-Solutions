function birdCode(arr){
let birdArr = [];
let output = [];
  for (i in arr) {
    birdArr.push(arr[i].toUpperCase().split(/[\s-]+/));  
  };
  for (i in birdArr) {
    if (birdArr[i].length === 1) {
      let code = [];
      console.log(birdArr[i][0])
      code.push(birdArr[i][0][0])
      code.push(birdArr[i][0][1])
      code.push(birdArr[i][0][2])
      code.push(birdArr[i][0][3])
      output.push(code.join(''))

    }
    if (birdArr[i].length === 2) {
      let code = [];
      code.push(birdArr[i][0][0])
      code.push(birdArr[i][0][1])
      code.push(birdArr[i][1][0])
      code.push(birdArr[i][1][1])
      output.push(code.join(''))
    }
    if (birdArr[i].length === 3) {
      let code = [];
      code.push(birdArr[i][0][0])
      code.push(birdArr[i][1][0])
      code.push(birdArr[i][2][0])
      code.push(birdArr[i][2][1])
      output.push(code.join(''))
    }
    if (birdArr[i].length === 4) {
      let code = [];
      code.push(birdArr[i][0][0])
      code.push(birdArr[i][1][0])
      code.push(birdArr[i][2][0])
      code.push(birdArr[i][3][0])
      output.push(code.join(''))
    }    
  }
  return output;
}