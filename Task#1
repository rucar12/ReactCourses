

function calculate (number){
    const alphabetic = 'abcdefghijklmnopqrstuvwxyz';
    
    if (number<0){
        error ();
        return null;
    } else if (number == 0){
        console.log('Our array is empty =( ');
        return null;
    }
    
    let arr=[];
    arr.length = number;
    for(i=0; i<number; i++){
        arr[i] = alphabetic.split('').splice(i,number);
        arr[i] = rec(arr[i],number,alphabetic)
    }
    return arr;
}  

function rec(el,number, arr){

    if(el.length==number){
        return el;
    } else {
        let sub =number -el.length;
        let deficient = arr.split('').splice(0,sub);
        let newArr =el.concat(deficient);
        el=newArr;
        return rec(el,number,arr);
    }
    
}

function error () {
    console.log ("Error! Type a number greater than 0 and try again.");
}
console.log(calculate(15));

