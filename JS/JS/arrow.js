
function HELLO(){
    console.log("hello");
}
HELLO();
//arrofunction
const hello1=()=>console.log("hello1");
hello1();
function add(a,b){
    return(a+b);
}
const sum=add(34,54);
console.log("Sum=",sum);
//deafult
const add1=(a,b=0)=>(a+b);
const sum1=add1(134,50);
console.log("sum=",sum1);