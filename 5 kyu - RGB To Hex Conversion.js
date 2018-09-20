function rgb(r, g, b){
  let hexR = r.toString(16).toUpperCase() 
  let hexG = g.toString(16).toUpperCase() 
  let hexB = b.toString(16).toUpperCase() 
  
    if (r < 0) {
  hexR = '00'
  }
    if (g < 0) {
  hexG = '00'
  }
    if (b < 0) {
  hexB = '00'
  }
  
    if (r > 255) {
  hexR = 'FF'
  }
    if (g > 255) {
  hexG = 'FF'
  }
    if (b > 255) {
  hexB = 'FF'
  }
  
  if (hexR.length < 2) {
  hexR = '0' + hexR
  }
    if (hexG.length < 2) {
  hexG = '0' + hexG
  }
    if (hexB.length < 2) {
  hexB = '0' + hexB
  }

  return (hexR + hexG + hexB);
}

Test.assertEquals(rgb(0, 0, 0), '000000', "message")
Test.assertEquals(rgb(255, 255, 255), 'FFFFFF', "message")
Test.assertEquals(rgb(116, 244, 66), '74F442', "message")
Test.assertEquals(rgb(45, 3, 26), '2D031A', "message")
Test.assertEquals(rgb(14, 27, 30), '0E1B1E', "message")
Test.assertEquals(rgb(214, 203, 186), 'D6CBBA', "message")