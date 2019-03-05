function XO(str) {
    let stringCaps = str.toUpperCase().split('');
    let exes = stringCaps.filter(i => i === 'X');
    let ohs = stringCaps.filter(i => i === 'O');
    return (exes.length === ohs.length);
}