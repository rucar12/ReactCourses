const space = " ";
const nrwness = "";

function calculate (data){
    let dataArr = data.split(space);
    let Arr1 = dataArr[0];
    let Arr2 = dataArr[2];
    
    if (dataArr[1] == "+") {
        dataArr.splice(1,1);
        let result = dataArr.join(nrwness);
        return result;
    } else if (dataArr[1] == "-") {
        if (Arr1.length < Arr2.length) {
            error();
            return 0;
        }
        let result = [];
        let num = Arr1.length - Arr2.length;
        for (i=0; i<num; i++){
            result.push(".");
        }
        return result.join(nrwness);
    } else if (dataArr[1] == "//" || '/') {
        if (Arr1.length < Arr2.length) {
            error();
            return 0;
        }
        let result = [];
        let num = Math.floor(Arr1.length / Arr2.length);
        for (i=0; i<num; i++){
            result.push(".");
        }
        return result.join(nrwness);
    } else if (dataArr[1] == "*") {
        let result = [];
        let num = Arr1.length * Arr2.length;
        for (i=0; i<num; i++){
            result.push(".");
        }
        return result.join(nrwness);
    }
    
}  

function error () {
    console.log ("First value is so small for this operation");
}
console.log(calculate("..... / .."));

