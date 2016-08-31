//The sum of a range
function range(start ,end,step=1){
  var arr =[];
  if(step>0){
     for(var i=start;i<=end;i+=step){
       arr.push(i);
  }
  }else{
     for(var i=start;i>=end;i+=step){
       arr.push(i);
  }
  }
 return arr;
};
function sum(arr){
  var total=0;
  for(var i = 0;i<=arr.length;i++){
    total+=i;
  }
  return total;
};
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//Reversing an array
function reverseArray(arr){
  var newArr =[];
  for(var i = arr.length-1;i>=0;i--){
    newArr.push(arr[i]);
  }
  return newArr;
};
function reverseArrayInPlace (arr){
  for(var i=0;i<arr.length/2;i++){
   var temp = arr[arr.length-1-i];
    arr[arr.length-i-1]= arr[i];
    arr[i] = temp;  
  }
  return arr;
};
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// A list
function arrayToList(array){
 var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
};

function listToArray(list){
var arr =[];
  for(var i =list;i;i=i.rest){
    arr.push(i.value);
  }
  return arr;
};
function prepend(element, list){
var newList={};
  newList.value = element,
    newList.rest=list;
  return newList;
};
function nth(list,number){
   if (!list)
    return undefined;
  else if (number == 0)
    return list.value;
  else
    return nth(list.rest, number - 1);
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//Deep comparison

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
};
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
