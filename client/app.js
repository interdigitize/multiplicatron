const product = require('./multiplicatron.js');

class ViewManager {

  connectEventHandlers(){
    document.getElementById('form-numbers').addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(event){
    event.preventDefault();
    let num1 = document.getElementById('input-num1').value;
    let num2 = document.getElementById('input-num2').value;
    //second parameter is the radix, the base in mathematical numeral systems—basically base 10
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);

    const answer = product(num1, num2);

    this.renderProduct(answer);
  }

  renderProduct(answer){
    document.getElementById('product').textContent = answer;
  }
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
