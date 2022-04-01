function partialAny(fn,...partSave) {
  let arr = [...partSave];
  let i =0;
  let undefArr = arr.filter((el)=>el===undefined);
  return function (...newArgs) {
      let arr2 =[...newArgs];
      let resArr = arr.map((el) => el === undefined?arr2[i++]:el);
      if(undefArr.length==0 ||undefArr.length=="0" ){
        let sub = arr2.length;
        arr2 = arr2.splice(0,sub);
        resArr =resArr.concat(arr2);
      }
      if(undefArr.length<arr2.length && undefArr.length!=0 ){
        let sub = arr2.length-undefArr.length;
        arr2 = arr2.splice(undefArr.length-1,sub+1);
        resArr =resArr.concat(arr2);
      }
      return fn(...resArr);
  };
}