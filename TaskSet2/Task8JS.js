function pluck(objects, fieldName) {
  let res =[];
  
  for(i=0; i<objects.length; i++){
    res.push(objects[i][fieldName]);
  }
  return res;
}
 