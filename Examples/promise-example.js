function myDisplayer(some) {
  console.log(some);
}

//callbacks
let myPromise = new Promise(function(myResolve, myReject) {
  let x = 10;

// The producing code 

  if (x == 10) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

//Promise.then() takes two arguments, a callback for success and another for failure.
myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);