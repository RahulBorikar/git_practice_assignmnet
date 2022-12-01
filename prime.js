// Problem 1 : Check whether a number is Prime or not


let number = 37;
let count = 0;
for(let i = 0; i <= number; i++){
    if(number % i === 0){
        count++;
    }
} 
if(count==2){
console.log("prime")
} else {
console.log("not a prime")
 }