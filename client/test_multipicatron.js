const product = require('./multiplicatron.js');

class TestSuite {
  runTest(testname){
    const result = this[testName]();
    console.log(result, testname);
  }
  runTests(){
    Object.getOwnPropertyNames(Object.getPrototypeOf(this))
    .filter(prop => this[prop] instanceof Function)
    .filter(prop => prop.indexOf('test') !== -1)
    .forEach(testname => this.runTest(testname));
  }
  assertEquals(){
    return a === b;
  }
  testMultiplyPositiveNumbers(){
    return this.assertEquals(multiply(7, 2), 14);
  }
  testMultiplyNegativeNumbers(){
    return this.assertEquals(multiply(-7, -2), 14);
  }
  testMultiplyNegativeAndPositiveNumbers(){
    return this.assertEquals(multiply(-7, 2), -14);
  }
}



// class TestSuite {
//   runTests(){
//     this.testMultiplyPositiveNumbers();
//     this.testMultiplyNegativeNumbers();
//     this.testMultiplyNegativeAndPositiveNumbers();
//   }
//   assertEquals(){
//     return a === b;
//   }
//   testMultiplyPositiveNumbers(){
//     const result = this.assertEquals(multiply(7, 2), 14);
//     console.log(result, 'testMultiplyPositiveNumbers');
//   }
//   testMultiplyNegativeNumbers(){
//     const result = this.assertEquals(multiply(-7, -2), 14);
//     console.log(result, 'testMultiplyNegativeNumbers');
//   }
//   testMultiplyNegativeAndPositiveNumbers(){
//     const result = this.assertEquals(multiply(-7, 2), -14);
//     console.log(result, 'testMultiplyNegativeAndPositiveNumbers');
//   }
// }

const testSuite = new TestSuite();
testSuite.runTests;
