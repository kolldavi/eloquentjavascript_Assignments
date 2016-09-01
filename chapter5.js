//Flattening
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(a,b){
return a.concat (b);}));

// → [1, 2, 3, 4, 5, 6]

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

//Mother-child age difference

var hasMother =function(person){
return person.mother in byName
};

function getAgeDiff(person) {
    return person.born - byName[person.mother].born
}

console.log(average(ancestry.filter(hasMother).map(getAgeDiff)));
// → 31.2

//Historical life expectancy
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

// Every and then some
function every(a, predicate) {
    for (var i=0; i< a.length; ++i) {
        if (!(predicate(a[i]))) {
            return false
        }
    }
    return true;
}

function some(a, predicate) {
    for (var i=0; i< a.length; ++i) {
        if (predicate(a[i])) {
            return true;
        }
    }
    return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false