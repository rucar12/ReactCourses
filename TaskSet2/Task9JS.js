function filter (arr, fn) {
  let res = [];
  for(i=0; i<arr.length; i++) {
    if (fn(arr[i]) == true) {
      res.push(arr[i]);
    }
  }
  return res;
}


