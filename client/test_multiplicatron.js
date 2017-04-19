const product = require('./multiplicatron.js');


// console.log(product(4,6) === 24, 'multiply positive numbers');
// console.log(product(-4,-6) === 24, 'multiply negative numbers');
// console.log(product(4,-6) === -24, 'multiply positive and negative numbers');


// class TestSuite {
//   runTests(){
//     this.testMultiplyPositiveNumbers();
//     this.testMultiplyNegativeNumbers();
//     this.testMultiplyPositiveAndNegativeNumbers();
//   }
//
//   assertEquals(a,b){
//     return a === b;
//   }
//
//   testMultiplyPositiveNumbers(){
//     const result = this.assertEquals(product(5,3), 15);
//     console.log(result, 'testMultiplyPositiveNumbers');
//   }
//   testMultiplyNegativeNumbers(){
//     const result = this.assertEquals(product(-5,-3), 15);
//     console.log(result, 'testMultiplyNegativeNumbers');
//   }
//   testMultiplyPositiveAndNegativeNumbers(){
//     const result = this.assertEquals(product(5,-3), -15);
//     console.log(result, 'testMultiplyPositiveAndNegativeNumbers');
//   }
// }

 class TestSuite {

  runTest(testname){
    const result = this[testname]();
    console.log(result, testname);
  }
  runTests(){
    Object.getOwnPropertyNames(Object.getPrototypeOf(this))
    .filter(prop => this[prop] instanceof Function)
    .filter(prop => prop.indexOf('test') !== -1)
    .forEach(testname => this.runTest(testname));
  }

  assertEquals(a, b){
    return a === b;
  }
  testMultiplyThreePositiveNumbers(){
    return this.assertEquals(product([3, 5, 1]), 15);
  }
  testMultiplyThreeNegativeNumbers(){
    return this.assertEquals(product([-7, -2, -1]), -14);
  }
  testMultiplyTwoPositiveNumbers(){
    return this.assertEquals(product([7, 2]), 14);
  }
  testMultiplyTwoNegativeNumbers(){
    return this.assertEquals(product([-7, -2]), 14);
  }
  testMultiplyAPositiveAndNegativeNumber(){
    return this.assertEquals(product([-7, 2]), -14);
  }
  testMultiplyOnePositiveNumber(){
    return isNaN(product([1]));
  }
  testMultiplyOneNegativeNumber(){
    return isNaN(product([-1]));
  }
  testMultiplyAString(){
    return isNaN(product("hi"));
  }
}

const testSuite = new TestSuite();
testSuite.runTests(); //Don't forget the invocation opperators!!!
