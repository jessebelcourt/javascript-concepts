/**
 * Hoisting - In JavaScript when we declare variables with 
 * 'var' keyword, they are 'hoisted' to the top of our code.
 */

 console.log(name);

 var name = "jesse";

 /**
  * The above code is equivalent to the following
  */

  var name;
  console.log(name);
  name = "jesse";

  /**
   * More complex exmaple. Var is function scoped, meaninng that rate inside
   * the function will take precedence over the rate variable declared outside
   * of the function.
   */

var DEFAULT_RATE = 0.1;
var rate = 0.05;

function getRate() {
  if (!rate) {
    var rate = DEFAULT_RATE;
  }

  return rate;
}

console.log(`Your rate is: ${getRate()}`);

/**
 * The above is equivalent to the following:
 */

 var DEFAULT_RATE = 0.1;
 var rate = 0.05;
 
function getRate2() {
  var rate;
  if (rate) {
    rate = DEFAULT_RATE;
  }

  return rate;
}

/**
 * We don't see hoisting with let, const. The following should throw
 * an error.
 */

 console.log(color);
 let color = "purple";

