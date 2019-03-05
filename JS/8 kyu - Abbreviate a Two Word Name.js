function abbrevName(name){
  let names = name.toUpperCase().split(' ')
  return (`${names[0][0]}.${names[1][0]}`)
}