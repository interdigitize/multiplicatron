const product = require('./multiplicatron.js');

console.log(product(5,4));
class ViewManager {
  connectEventHandlers(){
    document.getElementById('form-numbers').addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(event){
    event.preventDefault();
    let num1 = document.getElementById('input-num1').value;
    let num2 = document.getElementById('input-num2').value;
    // let inputValuesArr = [];
    //
    // for(var i=0; i<3; i++) { // I need to change the three to a varible
    //   var temp = document.getElementById('input-num' + i).value;
    //   console.log(temp);
    //   inputValuesArr.push(temp);
    // }
//TO DO
    // when the new btn is clicked, add a new field to the DOM
    // pull all field values into and array
    // reduce the arr and append the product to the page


    const answer = product(num1, num2); //inputValuesArr.reduce(function(pre, cur){
    //   return parseInt(pre, 10) * parseInt(cur, 10);
    // });

    this.renderProduct(answer);
  }

  renderProduct(answer){
    document.getElementById('product').textContent = answer;
  }
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
