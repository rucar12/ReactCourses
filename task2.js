// я навмисно не робив подвійним циклом(знаю, що то погано)
function calculate (number){
    let alphabetic = 'abcdefghijklmnopqrstuvwxyz';
    
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
        if (i%26==0){
            alphabetic=alphabetic+alphabetic;
        }
        arr[i] = alphabetic.split('').splice(i,number);
        arr[i] = rec(arr[i],number,alphabetic).join(' ');
    }
    for (i=0; i<number; i++){
        arr[i] =arr[i]+"\n";
    }
    return arr.join('');
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
console.log(calculate(30));