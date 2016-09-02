//Retry
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  // Your code here.
  for(;;){
  try{
   return primitiveMultiply(a,b); }
  catch(e){
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
  }
}
}
console.log(reliableMultiply(8, 8));
// → 64

//The locked box
function withBoxUnlocked(body) {
  var locked = box.locked;
  if (!locked)
    return body();

  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}


withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true