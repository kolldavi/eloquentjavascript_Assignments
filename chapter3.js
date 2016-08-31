//Minimum
function min(arg1,arg2){
  if(arg1 < arg2){
    return arg1;
  }
  return arg2;
};
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// isEven Recursion
function isEven(num){
  if(num===0){
    return true;
  }else if(num===1){
  return false;
  }else if(num<0){
    return isEven(num+2);
  }else{
  return isEven(num-2);
  }
};
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??  flase

//Bean counting
function countBs(str){
  var cnt=0;
  for(var i =0;i<str.length;i++){
    if(str.charAt(i) === "B"){
      cnt++;
    }
  }
  return cnt;
};
function countChar(str,char){
  var cnt=0;
  for(var i =0;i<str.length;i++){
    if(str.charAt(i)===char){
      cnt++;
    }
  }
  return cnt;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4