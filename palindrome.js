let string = "raacecaaar";

let reverse = "";

flag = false;

for(let i = string.length - 1; i >= 0; i--){
    reverse += string[i];
}

for(let i = 0; i < string.length; i++){
    if(string[i] === reverse[i]){
        flag = true;
    }else{
        flag = false;
        break;
    }
}console.log(flag);


