function sequence(start = 0, step=1) {
  let count = start;
  return function(){
    let sum =count;
    count = count + step;
    return sum;
};
}