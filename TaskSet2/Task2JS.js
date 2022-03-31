function take(fn, count) {
let arr =[];
  for (i=0; i<count; i++){
    res =fn();
    arr[i] = res;
  }
return arr;
}

