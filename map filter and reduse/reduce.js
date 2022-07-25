const arr=[1,2,3,4,5,6,7,8];

let initialvalue = 0;

const sum =arr.reduce((previousvalue,currentvalue)=>{
    console.log("previousvalue",previousvalue,"currentvalue",currentvalue);
    return previousvalue + currentvalue;
},initialvalue);

console.log(sum);

