const product = require('./multiplicatron.js');

class ViewManager {
  connectEventHandlers(){
    document.getElementById('form-numbers').addEventListener('submit', this.onSubmit.bind(this));
    document.getElementById('new-factor').addEventListener('click', this.addInput);
  }

  addInput(){
    let field = document.getElementById('inputs');
    field.insertAdjacentHTML('beforeend', '<div><input class="input" type="text" size="3"></div>');
  }

  onSubmit(event){
    event.preventDefault();
    let values = document.querySelectorAll('.input'); // Is there a better way to select the values?
    let inputValuesArr = [];
    values.forEach(function(el){
        inputValuesArr.push(el.value);
    });
    var answer = product(inputValuesArr);
    this.renderProduct(answer);
  }

  renderProduct(answer){
    document.getElementById('product').textContent = answer;
  }
}
console.log(product([]))

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
