function map(fn, array) {
  let res = [];
  for (i=0; i<array.length; i++){
    let calc = fn(array[i]);
    res.push(calc);
  }
  return res;
}