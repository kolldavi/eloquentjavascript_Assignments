//A vector type

function Vector(x,y){
this.x = x;
this.y =y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};
Vector.prototype.minus = function(other){
  return new Vector(this.x -other.x,this.y - other.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5

//Another cell
// Your code here.
function StretchCell(inner,width,height){
  this.inner = inner;
  this.width = width;
  this.height = height;
};
StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]

//Sequence interface

function RangeSeq(from, to) {
  this.from = from;
  this.to = to;
};

RangeSeq.prototype.next = function() {
  if (this.end) {
    return null;
  } else {
    return this.from++;
  }
};
function ArraySeq(arr) {
  this.arr = arr.slice();
  this.index = 0;
};
ArraySeq.prototype.next = function() {
  if (this.end) {
    return null;
  } else {
    return this.arr[this.index++];
  }
};

Object.defineProperty(ArraySeq.prototype, 'end', {
  get: function() {
    return this.index === this.arr.length;
  }
});

function logFive(sequence) {
  for (var i = 0; i < 5 && !sequence.end; i++) {
    console.log(sequence.next());
  }
};
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104