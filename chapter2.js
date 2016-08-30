// Looping a triangle
var str = '#';
for(var i=0;i<7;i++){
  console.log(str);
  str += '#';
};
/*
#
##
###
####
#####
######
#######
*/

//FizzBuzz
for(var i=1;i<=100;i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz ");
  }else if(i%3===0 ){
    console.log("Fizz");
  }else if(i % 5 === 0){
    console.log('Buzz');
  }else{
  console.log(i);
  }  
};
/*
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz ...
*/

//Chess board
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
 /*
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/
